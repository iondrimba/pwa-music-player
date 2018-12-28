import React, { Component, Fragment } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import MediaButton from '../../components/MediaButton/MediaButton';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import { ReactComponent as PauseButton } from '../../icons/pause.svg';
import styles from './styles.scss';

const percent = (current, total) => {
  return (current / total) * 100
}

const convertSecondsToMMss = (totalSeconds) => {
  const sec_num = parseInt(totalSeconds, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  return `${minutes}:${seconds}`;
}

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
              <MediaButton onClick={this.onPlayClick} id={this.props.track.id} icon={<PlayButton width={26}/>} />
              <MediaButton onClick={this.onPauseClick} id={this.props.track.id} icon={<PauseButton width={26}/>} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Detail;
