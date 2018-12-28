import React from 'react';
import styles from './styles.scss';

export default (props) => {
  return <button className={`media-button ${props.active ? 'media-button--active' : ''}`} onClick={props.onClick}>{props.icon}</button>
};
