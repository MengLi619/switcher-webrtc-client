import { Service } from 'typedi';
import * as mediasoup from 'mediasoup-client';
import socketClient from 'socket.io-client';
import { assertExists } from '../common/utils';
import * as config from '../resource/config.json';

const WEBRTC_ADAPTER_URL = assertExists(process.env.REACT_APP_WEBRTC_ADAPTER_URL);

type PromisifySocket = {
  request<T>(type: string, data?: object): Promise<T>;
};

function socketPromisify(socket: SocketIOClient.Socket): PromisifySocket {
  return {
    request<T>(type: string, data?: object) {
      return new Promise((resolve) => {
        socket.emit(type, data || {}, resolve);
      });
    }
  };
}

@Service()
export class WebRtcService {
  private socket?: SocketIOClient.Socket;
  private promisifySocket?: PromisifySocket;
  private device?: mediasoup.types.Device;
  private consumerTransport?: mediasoup.types.Transport;
  private consumers = new Map<string, mediasoup.types.Consumer>();

  public async initialize() {
    const opts = {
      path: '/server',
      transports: ['websocket'],
    };
    this.socket = socketClient(WEBRTC_ADAPTER_URL, opts);
    this.promisifySocket = socketPromisify(this.socket);
    return new Promise(resolve => {
      assertExists(this.socket).on('connect', async () => {
        const data = await assertExists(this.promisifySocket).request<mediasoup.types.RtpCapabilities>('getRouterRtpCapabilities');
        await this.loadDevice(data);
        await this.createConsumerTransport();
        for (const source of config.sources) {
          await this.addSource(source.name, source.rtmpUrl);
        }
        await this.addSource(config.output.name, config.output.rtmpUrl);
        resolve();
      });
    })
  }

  public async display(sourceName: string, videoElement: HTMLVideoElement) {
    const promisifySocket = assertExists(this.promisifySocket);
    const { consumer, stream } = await this.consume(sourceName);
    videoElement.srcObject = stream;
    this.consumers.set(consumer.id, consumer);
    await promisifySocket.request('resume', { consumerId: consumer.id });
    await videoElement.play();
  }

  private async loadDevice(routerRtpCapabilities: mediasoup.types.RtpCapabilities) {
    try {
      this.device = new mediasoup.Device();
      await this.device.load({ routerRtpCapabilities });
    } catch (error) {
      if (error.name === 'UnsupportedError') {
        console.error('browser not supported');
      }
    }
  }

  private async createConsumerTransport() {
    const promisifySocket = assertExists(this.promisifySocket);
    const device = assertExists(this.device);
    const data = await promisifySocket.request<mediasoup.types.TransportOptions>('createConsumerTransport');
    this.consumerTransport = device.createRecvTransport(data);
    this.consumerTransport.on('connect', ({ dtlsParameters }, callback, errback) => {
      console.log('consumerTransport connect');
      promisifySocket.request('connectConsumerTransport', {
        transportId: assertExists(this.consumerTransport).id,
        dtlsParameters
      }).then(callback).catch(errback);
    });
    this.consumerTransport.on('connectionstatechange', async (state) => {
      console.log(`consumerTransport connectionstatechange: ${JSON.stringify(state)}`);
      switch (state) {
        case 'connected':
          console.log(`connected: ${JSON.stringify(state)}`);
          break;
        default:
          break;
      }
    });
  }

  private async addSource(name: string, rtmpUrl: string) {
    await assertExists(this.promisifySocket).request('createSource', {
      name: name,
      rtmpUrl: rtmpUrl,
    });
  }

  private async consume(sourceName: string) {
    console.log(`consume source: ${sourceName}`);
    const device = assertExists(this.device);
    const promisifySocket = assertExists(this.promisifySocket);
    const consumerTransport = assertExists(this.consumerTransport);

    const data = await promisifySocket.request<mediasoup.types.ConsumerOptions>('consume', {
      source: sourceName,
      transportId: consumerTransport.id,
      rtpCapabilities: device.rtpCapabilities,
    });

    const consumer = await consumerTransport.consume(data);
    const stream = new MediaStream();
    stream.addTrack(consumer.track);

    return { consumer, stream };
  }
}
