import React, { Component, Fragment } from 'react';
import FastAverageColor from 'fast-average-color/dist/index.es6';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import MediaButton from '../../components/MediaButton/MediaButton';
import convertSecondsToMMss from '../../helpers/timer';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import { ReactComponent as PauseButton } from '../../icons/pause.svg';
import styles from './styles.scss';


class Detail extends Component {
  constructor(props) {
    super(props);

    this.fac = new FastAverageColor();
  }

   onPlayClick = () => {
    this.props.onPlayClick(this.props.track);
  }

  onPauseClick = () => {
    this.props.onPauseClick(this.props.track);
  }

  onLoadImage = async (evt) => {
    const color = this.fac.getColor(evt.target, { algorithm: 'simple' });

    const rgb =  color.hex.replace('#','').match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));

    evt.target.style.boxShadow = `0 24px 35px -16px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.7)`;
  }

  render() {
    return (
      <Fragment>
        <div className="detail__track">
          <img className="detail__cover" crossOrigin="" onLoad={this.onLoadImage} src={this.props.track.artwork_url.replace('t50x50', 't300x300')} alt={`album artwork from track ${this.props.track.title}`} />
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
              <button className="prev-button" onClick={this.props.onPlayPrev}><PlayButton width={16} /></button>
              <MediaButton active={this.props.track.playing && !this.props.track.paused} onClick={this.onPauseClick} icon={<PauseButton width={28} />} />
              <MediaButton active={!this.props.track.playing && this.props.track.paused} onClick={this.onPlayClick} icon={<PlayButton width={28} />} />
              <button className="next-button" onClick={this.props.onPlayNext}><PlayButton width={16} /></button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Detail;
