import React, { memo } from 'react';
import styles from './styles.scss';

export default memo((props) => {
  return <button type="button" tabIndex={props.tabEnabled ? "0" : "-1"} name={props.label} aria-label={props.label} className={`icon-button ${props.className}`} onClick={props.onClick}>{props.icon}</button>
});
