import './App.scss';
import React from 'react';
import { Switcher } from './components/Switcher/Switcher';
import { Container } from 'typedi';
import { SourceService } from './services/sourceService';
import ReactLoading from 'react-loading';
import { assertExists } from './common/utils';
import { WebRtcService } from './services/webRtcService';
import { Output, Source } from './common/types';

type AppState = {
  loading: boolean;
  sources: Source[],
  output?: Output,
};

export class App extends React.Component<{}, AppState> {
  private readonly sourceService = Container.get(SourceService);
  private readonly webRtcService = Container.get(WebRtcService);

  public constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
      sources: [],
    };
  }

  public async componentDidMount() {
    await this.sourceService.initialize();
    await this.webRtcService.initialize();
    this.setState({
      loading: false,
      sources: this.sourceService.sources,
      output: this.sourceService.output,
    });
  }

  public render() {

    return (
      <div className="App">
        {
          this.state.loading
            ? <ReactLoading type='spin' color='black' height={20} width={20} />
            : <Switcher sources={this.state.sources} output={assertExists(this.state.output)} />
        }
      </div>
    );
  }
}
