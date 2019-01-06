import React, { Component } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

class ListItem extends Component {
  shouldComponentUpdate(prevProps) {
    if(prevProps.selectedTrack.id === this.props.track.id) {
      return prevProps.selectedTrack.percentage !== this.props.selectedTrack.trapercentage;
    }

    return prevProps.active !== this.props.active || prevProps.selectedTrack.title !== this.props.selectedTrack.title;
  }

  render() {
    const { id, percentage, playing } = this.props.selectedTrack;

    return (
      <li className="row">
        <button className={`${id === this.props.track.id && playing ? 'playing' : ''}`} tabIndex={this.props.active ? "0" : "-1"} onClick={this.props.onClick} data-id={this.props.track.id}>
          <div className="album">
            <img className="album__cover" src={this.props.track.artwork_url} alt={`Album artwork from track ${this.props.track.title}.`} />
          </div>
          <div className="info">
            <h2 className="info__track">{this.props.track.title}</h2>
            <span className="info__artist">{this.props.track.artist}</span>
            <div className="controls">
              <ProgressBar percent={id === this.props.track.id ? percentage : 0} />
            </div>
          </div>
        </button>
      </li>
    )
  }
}


export default ListItem;
