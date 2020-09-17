import './SourceView.scss';
import React from 'react';
import { Display } from '../Display/Display';
import { Source } from '../../common/types';

type SourceViewProps = {
  source: Source;
};

export class SourceView extends React.Component<SourceViewProps> {

  public render() {
    return (
      <div className='Source'>
        <Display sourceName={this.props.source.name} />
      </div>
    );
  }
}
