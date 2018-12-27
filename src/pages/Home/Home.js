import React, { Component, Fragment } from 'react';
import { ReactComponent as AudioWave } from '../../icons/audio-wave.svg';
import { ReactComponent as CD } from '../../icons/cd.svg';
import styles from './styles.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <CD className="cd" alt="CD icon." width="100"></CD>
        <AudioWave className="audiowave" alt="CD icon." width="60"></AudioWave>
        <button type="button" className="button" onClick={this.props.onStartClick}>Start listening!</button>
      </Fragment>
    );
  }
}

export default Home;
