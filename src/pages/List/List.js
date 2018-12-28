/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
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
  constructor(props) {
    super(props);
    console.log(props);

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
                  <div className="controls">
                    <ProgressBar percent={this.props.track.id === track.id ? this.props.track.percentage : 0} />
                  </div>
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
