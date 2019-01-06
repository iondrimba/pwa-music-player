import React, { Component } from 'react';
import styles from './styles.scss';

class ProgressBar extends Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.percent !== this.props.percent;
  }

  render() {
    return (
      <div className="progress-bar">
        <div className="progress-bar__mask" style={{ width: `${Math.floor(this.props.percent * 100)}%` }}>
          <div className="progress-bar__progress"></div>
        </div>
        <div className="progress-bar__bg"></div>
      </div>
    )
  }
}

export default ProgressBar;
