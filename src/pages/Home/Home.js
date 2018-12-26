import React, { Component } from 'react';
import { ReactComponent as AudioWave } from '../../icons/audio-wave.svg';
import { ReactComponent as CD } from '../../icons/cd.svg';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="home page">
        <CD className="cd" alt="CD icon." width="100"></CD>
        <AudioWave className="audiowave" alt="CD icon." width="60"></AudioWave>
        <Link
          className="button"
          to={{
            pathname: "/list",
            state: { fromHome: true }
          }}
        >Start listening!</Link>
      </div>
    );
  }
}

export default Home;
