import './Switcher.scss';
import React from 'react';
import { SourceView } from '../SourceView/SourceView';
import { Output, Source, TransitionType } from '../../common/types';
import Dropdown from 'react-dropdown';
import { Container } from 'typedi';
import { SourceService } from '../../services/sourceService';
import { OutputView } from '../OutputView/OutputView';

type SwitcherProps = {
  sources: Source[];
  output: Output;
};

type SwitcherState = {
  selectedSource?: Source;
  transitionType: TransitionType;
}

const transitions = [
  { value: TransitionType.Cut, label: 'Cut' },
  { value: TransitionType.Fade, label: 'Fade' },
  { value: TransitionType.Swipe, label: 'Swipe' },
  { value: TransitionType.Slide, label: 'Slide' },
];

export class Switcher extends React.Component<SwitcherProps, SwitcherState> {
  private readonly sourceSource = Container.get(SourceService);

  public constructor(props: SwitcherProps) {
    super(props);
    this.state = {
      transitionType: TransitionType.Cut,
    };
  }

  public render() {
    return (
      <div className='Switcher'>
        <div className='SourceView-list'>
          {
            this.props.sources.map(source =>
              <div key={source.name}
                   className={`SourceView-container ${this.state.selectedSource === source ? 'selected': ''}`}
                   onClick={() => this.onSourceClicked(source)}
              >
                <SourceView source={source}/>
              </div>
            )
          }
        </div>
        <div className='Transition'>
          <Dropdown
            value={this.state.transitionType}
            options={transitions}
            onChange={option => this.setState({ transitionType: option.value as TransitionType })}
          />
          <button
            className='Transition-button'
            onClick={() => this.onTransitionClicked()}
          >
            Transition
          </button>
        </div>
        <div className='OutputView-container'>
          <OutputView output={this.props.output} />
        </div>
      </div>
    );
  }

  private async onTransitionClicked() {
    if (this.state.selectedSource) {
      await this.sourceSource.switchSource(this.state.selectedSource, this.state.transitionType, 3000);
    }
  }

  private onSourceClicked(source: Source) {
    this.setState({
      selectedSource: source,
    });
  }
}
