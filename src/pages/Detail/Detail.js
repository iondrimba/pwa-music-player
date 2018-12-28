import React, { Component, Fragment } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import MediaButton from '../../components/MediaButton/MediaButton';
import convertSecondsToMMss from '../../helpers/timer';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import { ReactComponent as PauseButton } from '../../icons/pause.svg';
import styles from './styles.scss';


class Detail extends Component {
  constructor(props) {
    super(props);

    this.onPauseClick = this.onPauseClick.bind(this);
    this.onPlayClick = this.onPlayClick.bind(this);
  }

  onPlayClick() {
    this.props.onPlayClick(this.props.track);
  }

  onPauseClick() {
    this.props.onPauseClick(this.props.track);
  }

  render() {
    return (
      <Fragment>
        <div className="detail__track">
          <img className="detail__cover" crossOrigin="" src={this.props.track.artwork_url.replace(/large/, 't300x300')} alt={`album artwork from track ${this.props.track.title}`} />
          <div className="detail__controls">
            <ProgressBar percent={this.props.track.percentage} />
            <div className="detail__timing">
              <time className="time">{convertSecondsToMMss(this.props.track.currentTime)}</time>
              <time className="time">{convertSecondsToMMss(this.props.track.duration / 1000)}</time>
            </div>
            <div className="detail__buttons">
              <MediaButton active={this.props.track.playing && !this.props.track.paused} onClick={this.onPauseClick} icon={<PauseButton width={22}/>} />
              <MediaButton active={!this.props.track.playing && this.props.track.paused} onClick={this.onPlayClick} icon={<PlayButton width={22}/>} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Detail;
