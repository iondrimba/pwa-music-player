/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import styles from './styles.scss';

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

class List extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    const id = Number(evt.currentTarget.attributes['item-id'].value);

    this.props.onClick(id);
  }

  render() {
    return (
      <Fragment>
        <ul className="track-list">
          {
            this.props.tracks.map((track) => {
              return <li className="row" key={track.id} item-id={track.id} onClick={this.onClick}>
                <div className="album">
                  <img className="album__cover" crossOrigin="" src={track.artwork_url} alt={`album artwork from track ${track.title}`} onLoad={this.onLoadImage} />
                </div>
                <div className="info">
                  <h2 className="info__track">{track.title}</h2>
                  <span className="info___artist">{track.user.username}</span>
                </div>
                <div className="controls">
                  <button onClick={this.onPlayClick} track-id={track.id}>play</button>
                  <button onClick={this.onPauseClick} track-id={track.id}>pause</button>
                  <div className="progress-bar"></div>
                  <time className="current">{convertSecondsToMMss(Number(track.id) === Number(0) ? 0 : 0)}</time>
                  <time className="duration">{convertSecondsToMMss(track.duration / 1000)}</time>
                </div>
              </li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default List;
