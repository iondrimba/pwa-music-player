import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class IconButton extends Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.tabEnabled !== this.props.tabEnabled || prevProps.className !== this.props.className;
  }

  render() {
    return (
      <button type="button" tabIndex={this.props.tabEnabled ? "0" : "-1"} name={this.props.label} aria-label={this.props.label} className={`icon-button ${this.props.className}`} onClick={this.props.onClick}>{this.props.icon}</button>
    )
  }
}

IconButton.propTypes = {
  tabEnabled: PropTypes.bool,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default IconButton;
