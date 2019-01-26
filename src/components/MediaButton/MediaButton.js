import React, { Component } from 'react';
import './styles.scss';

class MediaButton extends Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.active !== this.props.active;
  }

  render() {
    return (
      <button type="button" tabIndex={this.props.tabEnabled ? "0" : "-1"} aria-label={this.props.name} className={`${this.props.className || ''} media-button ${this.props.active ? 'media-button--active' : ''}`} onClick={this.props.onClick}>{this.props.icon}</button>
    )
  }
}

export default MediaButton;
