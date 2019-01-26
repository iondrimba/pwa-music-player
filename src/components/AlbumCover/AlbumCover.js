import React, { PureComponent } from 'react';
import FastAverageColor from 'fast-average-color/dist/index.es6';
import { ReactComponent as PictureIcon } from '../../icons/picture.svg';
import './styles.scss';

class AlbumCover extends PureComponent {
  constructor(props) {
    super(props);

    this.loader = React.createRef();
    this.image = React.createRef();
    this.view = React.createRef();

    this.fac = new FastAverageColor();
  }

  componentDidMount() {
    this.icon = document.querySelector('.album-cover__icon');
    this.imageDummy = new Image();

    this.imageDummy.onload = (evt) => {
      setTimeout(() => {
        this.image.current.src = this.props.src;
        this.image.current.classList.remove('album-cover__image--loaded');
        this.icon.classList.remove('album-cover__icon--active');
      }, 200);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.src !== this.props.src) {
      this.imageDummy.src = this.props.src;
      this.image.current.classList.add('album-cover__image--loaded');

      requestAnimationFrame(() => {
        this.view.current.style.boxShadow = 'rgba(107, 179, 237, .5) 0px 24px 35px -16px';
        this.loader.current.classList.remove('hide');
        this.loader.current.classList.add('show');
        this.icon.classList.add('album-cover__icon--active');
      });
    }
  }

  onLoadImage = async (evt) => {
    const color = this.fac.getColor(evt.target, { algorithm: 'simple' });
    const rgb = color.hex.replace('#', '').match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));

    setTimeout(() => {
      requestAnimationFrame(() => {
        this.loader.current.classList.add('hide');
        this.image.current.classList.add('album-cover__image--loaded');

        this.view.current.style.boxShadow = `0 24px 35px -16px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.7)`;
        this.image.current.attributes.src = this.props.src;
        this.image.current.classList.add('album-cover__image--loaded');
      });
    }, 200);
  }

  render() {
    return (
      <div ref={this.view} className={`album-cover`}>
        <PictureIcon className="album-cover__icon" />
        <div ref={this.loader} className="album-cover__loader"></div>
        <img ref={this.image} className="album-cover__image" crossOrigin="" onLoad={this.onLoadImage} alt={`album artwork from track ${this.props.alt}`} />
      </div>
    );
  }
}

export default AlbumCover;
