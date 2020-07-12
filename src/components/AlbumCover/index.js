import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FastAverageColor from 'fast-average-color/dist/index';
import sleep from '../../helpers/sleep';
import { ReactComponent as PictureIcon } from '../../icons/picture.svg';
import './style.scss';

class AlbumCover extends PureComponent {
  constructor(props) {
    super(props);

    this.loader = React.createRef();
    this.image = React.createRef();
    this.view = React.createRef();

    this.fac = new FastAverageColor();

    this._onLoadDummyImage = this._onLoadDummyImage.bind(this);
  }

  async _onLoadDummyImage() {
    await sleep(200);

    this.image.current.src = this.props.src;
    this.image.current.classList.remove('album-cover__image--loaded');
    this.icon.classList.remove('album-cover__icon--active');
  }

  _displayLoadingCover() {
    this.imageDummy.src = this.props.src;
    this.image.current.classList.add('album-cover__image--loaded');

    requestAnimationFrame(() => {
      this.view.current.style.boxShadow = 'rgba(107, 179, 237, .5) 0px 24px 35px -16px';
      this.loader.current.classList.remove('hide');
      this.loader.current.classList.add('show');
      this.icon.classList.add('album-cover__icon--active');
    });
  }

  _setAlbumShadowColor(color) {
    const rgb = color.hex.replace('#', '').match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));

    this.view.current.style.boxShadow = `0 24px 35px -16px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.7)`;
  }

  async _displayAlbumCover() {
    this.image.current.classList.add('album-cover__image--loaded');
  }

  _hideLoader() {
    this.loader.current.classList.add('hide');
  }

  componentDidMount() {
    this.icon = document.querySelector('.album-cover__icon');
    this.imageDummy = new Image();

    this.imageDummy.onload = this._onLoadDummyImage;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this._displayLoadingCover();
    }
  }

  onLoadImage = async (evt) => {
    const color = this.fac.getColor(evt.target, { algorithm: 'simple' });

    await sleep(200);

    requestAnimationFrame(() => {
      this._hideLoader();

      this._setAlbumShadowColor(color);

      this._displayAlbumCover();
    });
  }

  render() {
    return (
      <div ref={this.view} className={`album-cover`}>
        <PictureIcon className="album-cover__icon" />
        <div ref={this.loader} className="album-cover__loader"></div>
        <img ref={this.image} className="album-cover__image" crossOrigin="" onLoad={this.onLoadImage} alt={this.props.alt} />
      </div>
    );
  }
}

AlbumCover.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default AlbumCover;
