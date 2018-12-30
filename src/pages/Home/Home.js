import React, { Component, Fragment } from 'react';
import { ReactComponent as AudioWave } from '../../icons/audio-wave.svg';
import MediaButton from '../../components/MediaButton/MediaButton';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import { ReactComponent as CD } from '../../icons/cd.svg';
import styles from './styles.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <CD className="cd" alt="CD icon." width="100"></CD>
        <AudioWave className="audiowave" alt="CD icon." width="60"></AudioWave>
        <MediaButton active={true} onClick={this.props.onStartClick} icon={<PlayButton width={28} />} />
      </Fragment>
    );
  }
}

export default Home;
