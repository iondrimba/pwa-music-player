import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../../components/ProgressBar';
import MediaButton from '../../components/MediaButton';
import AlbumCover from '../../components/AlbumCover';
import convertSecondsToMMss from '../../helpers/timer';
import IconButton from '../../components/IconButton';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import { ReactComponent as PauseButton } from '../../icons/pause.svg';
import { ReactComponent as RepeatButton } from '../../icons/repeat-arrows.svg';
import { ReactComponent as LinkButton } from '../../icons/link.svg';
import './style.scss';

class Detail extends PureComponent {
  onPlayClick = () => {
    this.props.onPlayClick(this.props.track);
  }

  onPauseClick = () => {
    this.props.onPauseClick(this.props.track);
  }

  onLinkClick = () => {
    window.open(this.props.track.permalink_url);
  }

  render() {
    return (
      <Fragment>
        <div className="detail__track" aria-live="polite" aria-atomic="false">
          <AlbumCover
            hide={!this.props.active}
            src={this.props.track.artwork_url.replace('t50x50', 't300x300')}
            alt={`album artwork from track ${this.props.track.title}`}
          />
          <div className="detail__controls">
            <div className="detail__info">
              <h3 className="title">{this.props.track.title}</h3>
              <p className="artist">{this.props.track.artist}</p>
            </div>
            <ProgressBar percent={this.props.track.percentage} />
            <div className="detail__timing">
              <time className="time">{convertSecondsToMMss(this.props.track.currentTime)}</time>
              <time className="time">{convertSecondsToMMss(this.props.track.duration / 1000)}</time>
            </div>
            <div className="detail__buttons">
              <IconButton label="repeat song" tabEnabled={this.props.active} className={`icon-button ${this.props.repeat ? 'icon-button--high-light': ''}`} onClick={this.props.onRepeatClick} icon={<RepeatButton className="icon icon--back" width={16} />} />
              <button name="previous song" tabIndex={this.props.active ? "0" : "-1"} className="prev-button" onClick={this.props.onPlayPrev}><div className="divider"/><PlayButton width={16} /></button>
              <MediaButton name="pause button" className="pause" tabEnabled={this.props.active} active={this.props.track.playing && !this.props.track.paused} onClick={this.onPauseClick} icon={<PauseButton width={24} />} />
              <MediaButton name="play button" className="play" tabEnabled={this.props.active} active={!this.props.track.playing && this.props.track.paused} onClick={this.onPlayClick} icon={<PlayButton width={24} />} />
              <button name="next song button" tabIndex={this.props.active ? "0" : "-1"} className="next-button" onClick={this.props.onPlayNext}><PlayButton width={16} /><div className="divider"/></button>
              <IconButton label="song link" tabEnabled={this.props.active} className="icon-button" onClick={this.onLinkClick} icon={<LinkButton className="icon icon--back" width={16} />} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Detail.propTypes = {
  track: PropTypes.shape({
    currentTime: PropTypes.number.isRequired,
    duration: PropTypes.number,
    playing: PropTypes.bool.isRequired,
    paused: PropTypes.bool.isRequired,
    id: PropTypes.number,
    artwork_url: PropTypes.string.isRequired,
    title: PropTypes.string,
    artist: PropTypes.string,
    permalink_url: PropTypes.string
  }),
  repeat: PropTypes.bool,
  active: PropTypes.bool.isRequired,
  onRepeatClick: PropTypes.func.isRequired,
  onBackClick: PropTypes.func,
  onPauseClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onPlayPrev: PropTypes.func.isRequired,
  onPlayNext: PropTypes.func.isRequired,
}

export default Detail;
