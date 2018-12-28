import React from 'react';
import styles from './styles.scss';

export default (props) => {
  return <div className="progress-bar">
    <div className="progress-bar__mask" style={{ width: `${Math.floor(props.percent * 100)}%` }}>
      <div className="progress-bar__progress"></div>
    </div>
    <div className="progress-bar__bg"></div>
  </div>
};
