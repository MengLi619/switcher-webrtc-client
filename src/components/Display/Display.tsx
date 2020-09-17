import './Display.scss';
import React from 'react';
import { Container } from 'typedi';
import { WebRtcService } from '../../services/webRtcService';
import { assertExists } from '../../common/utils';

export type DisplayProps = {
  sourceName: string;
};

export class Display extends React.Component<DisplayProps> {
  private readonly webRtcService = Container.get(WebRtcService);
  private readonly videoRef = React.createRef<HTMLVideoElement>();

  public componentDidMount() {
    this.webRtcService.display(this.props.sourceName, assertExists(this.videoRef.current));
  }

  public render() {
    return (
      <div className='Display'>
        <video ref={this.videoRef} autoPlay muted />
      </div>
    );
  }
}
