import React, { PureComponent } from 'react';
import './style.scss';

class Loader extends PureComponent {
  constructor() {
    super();

    this.loader = React.createRef();
  }

  _addActiveClass() {
    this.loader.current.classList.add('animate');
  }

  componentDidMount() {
    const interval = setTimeout(this._addActiveClass, 100);
    clearTimeout(interval);
  }

  render() {
    return (
      <div ref={this.loader} className="loader" aria-label="loading.." ></div >
    )
  }
}

export default Loader;
