import React, { PureComponent } from 'react';
import './style.scss';

class Loader extends PureComponent {
  constructor() {
    super();

    this.loader = React.createRef();
  }

  _addActiveClass() {
    requestAnimationFrame(() => {
      this.loader.current.classList.add('animate');
    });
  }

  componentDidMount() {
    this._addActiveClass();
  }

  render() {
    return (
      <div ref={this.loader} className="loader" aria-label="loading.." ></div >
    )
  }
}

export default Loader;
