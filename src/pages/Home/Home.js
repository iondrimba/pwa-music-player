import React, { PureComponent, Fragment } from 'react';
import MediaButton from '../../components/MediaButton/MediaButton';
import { ReactComponent as Headphones } from '../../icons/headphones.svg';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import { ReactComponent as Soundcloud } from '../../icons/soundcloud.svg';
import { ReactComponent as Github } from '../../icons/github.svg';
import styles from './styles.scss';

class Home extends PureComponent {
  componentDidMount() {
    requestAnimationFrame(() => {
      [...document.querySelector('.home').querySelectorAll('.hidden')].map((elmt) => elmt.classList.add('active'));
    });
  }

  render() {
    return (
      <Fragment>
        <h1 className="title hidden">React Music Player</h1>
        <p className="subtitle hidden">made with SoundCloud API</p>
        <Headphones className="icon hidden" width="100" fill="#ccc" />

        <MediaButton className="hidden" tabEnabled={true} name="button show playlist" active={true} onClick={this.props.onStartClick} icon={<PlayButton width={28} />} />
        <footer className="footer">
          <Github fill="#b9b9b9"/>
         <a href="https://developers.soundcloud.com/docs/api" target="_blank" rel="noopener noreferrer" className="soundcloud">powered by <Soundcloud aria-label="Soundcloud" fill="#b9b9b9" width={64}/></a>
        </footer>
      </Fragment>
    );
  }
}

export default Home;
