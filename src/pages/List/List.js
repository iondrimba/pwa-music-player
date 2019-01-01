/* eslint-disable no-undef */
import React, { PureComponent, Fragment } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './styles.scss';

class List extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    const id = Number(evt.currentTarget.attributes['data-id'].value);

    this.props.onClick(id);
  }

  render() {
    return (
      <Fragment>
        <ul className="track-list" role="list">
          {
            this.props.tracks.map((track, i) => {
              return <li role="list-item" className="row" key={track.id} >
               <button className={`${this.props.track.id === track.id && this.props.track.playing ? 'playing' : ''}`} tabIndex={this.props.active ? "0" : "-1"} onClick={this.onClick} data-id={track.id}>
                <div className="album">
                  <img className="album__cover" src={track.artwork_url} alt={`Album artwork from track ${track.title}.`} />
                </div>
                <div className="info">
                  <h2 className="info__track">{track.title}</h2>
                  <span className="info__artist">{track.artist}</span>
                  <div className="controls">
                    <ProgressBar percent={this.props.track.id === track.id ? this.props.track.percentage : 0} />
                  </div>
                </div>
              </button>
              </li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default List;
