import React, { PureComponent } from 'react';
import './styles.scss';

class Loader extends PureComponent {
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
