import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class MediaButton extends Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.active !== this.props.active || prevProps.tabEnabled !== this.props.tabEnabled;
  }

  render() {
    return (
      <button type="button" tabIndex={this.props.tabEnabled ? "0" : "-1"} aria-label={this.props.name} className={`${this.props.className || ''} media-button ${this.props.active ? 'media-button--active' : ''}`} onClick={this.props.onClick}>{this.props.icon}</button>
    )
  }
}

MediaButton.propTypes = {
  tabEnabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MediaButton;
