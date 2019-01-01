import React, { Component } from 'react';
import styles from './styles.scss';

class Loader extends Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      document.querySelector('.loader').classList.add('animate');
    });
  }

  render() {
    return (
      <div className="loader" aria-label="loading.." ></div >
    )
  }
}

export default Loader;
