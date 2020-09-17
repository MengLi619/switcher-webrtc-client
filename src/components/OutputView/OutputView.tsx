import React from 'react';
import { Display } from '../Display/Display';
import { Output } from '../../common/types';

export type OutputViewProps = {
  output: Output,
};

export class OutputView extends React.Component<OutputViewProps> {

  public render() {
    return (
      <div className='OutputView'>
        <Display sourceName={this.props.output.name} />
      </div>
    );
  }
}
