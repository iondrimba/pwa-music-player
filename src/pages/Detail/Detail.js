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
          <img className="detail__cover" crossOrigin="" src={this.props.track.artwork_url.replace('t67x67', 't300x300')} alt={`album artwork from track ${this.props.track.title}`} />
          <div className="detail__controls">
            <div className="detail__info">
              <h3 className="title">{this.props.track.title}</h3>
              <p className="artist">{this.props.track.user.username}</p>
            </div>
            <ProgressBar percent={this.props.track.percentage} />
            <div className="detail__timing">
              <time className="time">{convertSecondsToMMss(this.props.track.currentTime)}</time>
              <time className="time">{convertSecondsToMMss(this.props.track.duration / 1000)}</time>
            </div>
            <div className="detail__buttons">
              <button className="prev-button"><PlayButton width={16}/></button>
              <MediaButton active={this.props.track.playing && !this.props.track.paused} onClick={this.onPauseClick} icon={<PauseButton width={28}/>} />
              <MediaButton active={!this.props.track.playing && this.props.track.paused} onClick={this.onPlayClick} icon={<PlayButton width={28}/>} />
              <button className="next-button"><PlayButton width={16}/></button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Detail;
