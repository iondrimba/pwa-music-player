import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ProgressBar extends Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.percent !== this.props.percent;
  }

  render() {
    return (
      <div className="progress-bar">
        <div className="progress-bar__mask" style={{ transform: `scale(${this.props.percent}, 1)` }}>
          <div className="progress-bar__progress"></div>
        </div>
        <div className="progress-bar__bg"></div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
}

export default ProgressBar;
