import React, { PureComponent } from 'react';
import './styles.scss';

class Loader extends PureComponent {
  _addActiveClass() {
    requestAnimationFrame(() => {
      this.loader.current.classList.add('animate');
    });
  }

  componentDidMount() {
    this.loader = React.createRef();

    this._addActiveClass();
  }

  render() {
    return (
      <div ref={this.loader} className="loader" aria-label="loading.." ></div >
    )
  }
}

export default Loader;
