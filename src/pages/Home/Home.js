import React, { Component, Fragment } from 'react';
import MediaButton from '../../components/MediaButton/MediaButton';
import { ReactComponent as Headphones } from '../../icons/headphones.svg';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import styles from './styles.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>React Music Player</h1>
        <p>made with SoundCloud API</p>
        <Headphones width="100" fill="#ccc"/>

        <MediaButton name="button show playlist" active={true} onClick={this.props.onStartClick} icon={<PlayButton width={28} />} />
      </Fragment>
    );
  }
}

export default Home;
