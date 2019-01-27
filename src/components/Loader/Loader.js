import React, { PureComponent } from 'react';
import './styles.scss';

class Loader extends PureComponent {
  _addActiveClass() {
    requestAnimationFrame(() => {
      document.querySelector('.loader').classList.add('animate');
    });
  }

  componentDidMount() {
    this._addActiveClass();
  }

  render() {
    return (
      <div className="loader" aria-label="loading.." ></div >
    )
  }
}

export default Loader;
