import React from 'react';
import styles from './styles.scss';

export default (props) => {
  return <button type="button" aria-label={props.name} className={`media-button ${props.active ? 'media-button--active' : ''}`} onClick={props.onClick}>{props.icon}</button>
};
