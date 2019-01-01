import React, { memo } from 'react';
import styles from './styles.scss';

export default memo((props) => {
  return <button type="button" aria-label={props.name} className={`${props.className || ''} media-button ${props.active ? 'media-button--active' : ''}`} onClick={props.onClick}>{props.icon}</button>
});
