import React, { Component } from 'react';
import styles from './styles.scss';

class IconButton extends Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.tabEnabled !== this.props.tabEnabled;
  }

  render() {
    return (
      <button type="button" tabIndex={this.props.tabEnabled ? "0" : "-1"} name={this.props.label} aria-label={this.props.label} className={`icon-button ${this.props.className}`} onClick={this.props.onClick}>{this.props.icon}</button>
    )
  }
}

export default IconButton;
