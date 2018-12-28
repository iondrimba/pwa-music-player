import React from 'react';
import styles from './styles.scss';

export default (props) => {
  return <button className="media-button" onClick={props.onClick} track-id={props.id}>{props.icon}</button>
};
