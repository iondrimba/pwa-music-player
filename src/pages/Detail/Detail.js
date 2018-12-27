import React, { Component, Fragment } from 'react';
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
        <div className="track">
          <img className="album__cover" crossOrigin="" src={this.props.track.artwork_url.replace(/large/, 't300x300')} alt={`album artwork from track ${this.props.track.title}`} />
          <div><button onClick={this.onPlayClick} track-id={this.props.track.id}>play</button>
            <button onClick={this.onPauseClick} track-id={this.props.track.id}>pause</button>
            <div className="progress-bar" style={{transform: `scaleX(${this.props.track.percentage})`}}></div>
            <time className="current">{convertSecondsToMMss(this.props.track.currentTime)}</time>
            <time className="duration">{convertSecondsToMMss(this.props.track.duration / 1000)}</time></div>
        </div>
      </Fragment>
    );
  }
}

export default Detail;
