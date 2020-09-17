import { Service } from 'typedi';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { SceneAddRequest, SceneSetAsCurrentRequest, Show, ShowCreateRequest, SourceAddRequest } from '../obs-headless/studio_pb';
import { assertExists } from '../common/utils';
import * as config from '../resource/config.json';
import { StudioClient } from '../obs-headless/StudioServiceClientPb';
import { Output, Source } from '../common/types';

const OBS_SERVER_URL = assertExists(process.env.REACT_APP_OBS_SERVER_URL);
const OBS_SHOW_NAME = assertExists(process.env.REACT_APP_OBS_SHOW_NAME);

@Service()
export class SourceService {
  private readonly studioClient: StudioClient;

  private show?: Show;
  public sources: Source[] = [];
  public output?: Output;

  constructor() {
    this.studioClient = new StudioClient(OBS_SERVER_URL);
  }

  public async initialize(): Promise<void> {
    const shows = (await this.studioClient.studioGet(new Empty(), {})).getStudio()?.getShowsList() || [];
    this.show = shows.find(s => s.getName() === OBS_SHOW_NAME);
    if (!this.show ) {
      const request = new ShowCreateRequest();
      request.setShowName(OBS_SHOW_NAME);
      const showResponse = await this.studioClient.showCreate(request, {});
      console.log(`showResponse = ${JSON.stringify(showResponse)}`);
      this.show  = (await this.studioClient.showCreate(request, {})).getShow() as Show;
    }

    // start show
    try {
      await this.studioClient.studioStart(new Empty(), {});
    } catch (error) {
      console.log(`Failed to start obs headless, maybe the show is already started.`);
    }

    // Create sources
    for (const source of config.sources) {
      this.sources.push(
        this.findExistedSource(this.show , source.rtmpUrl) || await this.addSource(source.name, source.rtmpUrl)
      );
    }

    // Create output
    this.output = {
      name: 'output',
      rtmpUrl: config.output.rtmpUrl,
    };
  }

  public async addSource(name: string, rtmpUrl: string): Promise<Source> {
    // Add scene
    const sceneAddRequest = new SceneAddRequest();
    sceneAddRequest.setShowId(assertExists(this.show?.getId()));
    sceneAddRequest.setSceneName(name);
    const sceneId = (await this.studioClient.sceneAdd(sceneAddRequest, {})).getScene()?.getId() as string;

    // Add source
    const sourceAddRequest = new SourceAddRequest();
    sourceAddRequest.setShowId(assertExists(this.show?.getId()));
    sourceAddRequest.setSceneId(sceneId);
    sourceAddRequest.setSourceName(name);
    sourceAddRequest.setSourceType('RTMP');
    sourceAddRequest.setSourceUrl(rtmpUrl);
    const source = await this.studioClient.sourceAdd(sourceAddRequest, {});

    // Return created source
    return {
      id: source.getSource()?.getId() as string,
      name: source.getSource()?.getName() as string,
      rtmpUrl: source.getSource()?.getUrl() as string,
      sceneId: sceneId,
    };
  };

  public async switchSource(source: Source, transitionType: string, transitionDurationMs: number) {
    const request = new SceneSetAsCurrentRequest();
    request.setShowId(assertExists(this.show?.getId()));
    request.setSceneId(source.sceneId);
    request.setTransitionType(transitionType);
    request.setTransitionDurationMs(transitionDurationMs);
    await this.studioClient.sceneSetAsCurrent(request, {});
  }

  private findExistedSource(show: Show, rtmpUrl: string): Source | undefined {
    for (const scene of show.getScenesList()) {
      for (const source of scene.getSourcesList()) {
        if (source.getUrl() === rtmpUrl) {
          return {
            id: source.getId(),
            name: source.getName(),
            rtmpUrl: source.getUrl(),
            sceneId: scene.getId(),
          };
        }
      }
    }
  }
}
