import React, { Component, Fragment } from 'react';
import MediaButton from '../../components/MediaButton/MediaButton';
import { ReactComponent as Headphones } from '../../icons/headphones.svg';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import styles from './styles.scss';

class Home extends Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      [...document.querySelectorAll('.hidden')].map((elmt) => elmt.classList.add('active'));
    });
  }

  render() {
    return (
      <Fragment>
        <h1 className="title hidden">React Music Player</h1>
        <p className="subtitle hidden">made with SoundCloud API</p>
        <Headphones className="icon hidden" width="100" fill="#ccc" />

        <MediaButton className="button hidden" name="button show playlist" active={true} onClick={this.props.onStartClick} icon={<PlayButton width={28} />} />
      </Fragment>
    );
  }
}

export default Home;
