import React, { memo } from 'react';
import styles from './styles.scss';

export default memo((props) => {
  return <button type="button" tabIndex={props.tabEnabled ? "0" : "-1"} aria-label={props.name} className={`${props.className || ''} media-button ${props.active ? 'media-button--active' : ''}`} onClick={props.onClick}>{props.icon}</button>
});
