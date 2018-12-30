/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './styles.scss';

class List extends Component {
  constructor(props) {
    super(props);

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
            this.props.tracks.map((track, i) => {
              return <li tabIndex={i} className={`row ${this.props.track.id === track.id && this.props.track.playing ? 'playing' : ''}`} key={track.id} item-id={track.id} onClick={this.onClick}>
                <div className="album">
                  <img className="album__cover" src={track.artwork_url} alt={`album artwork from track ${track.title}`} />
                </div>
                <div className="info">
                  <h2 className="info__track">{track.title}</h2>
                  <span className="info__artist">{track.artist}</span>
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
