import React, { Component } from 'react';
import { ReactComponent as HelpButton } from '../../icons/help-button.svg';
import { ReactComponent as BackButton } from '../../icons/left-arrow.svg';
import { ReactComponent as CloseButton } from '../../icons/close.svg';
import IconButton from '../IconButton/IconButton';
import styles from './styles.scss';

class Menu extends Component {
  render() {
    return (
      <nav className={`menu menu--${this.props.activeView}`}>
        <IconButton label="navigate back" className="icon-button icon-button--back" onClick={this.props.onBackClick} icon={<BackButton className="icon icon--back" width={16} />} />
        <h1 className="menu__title">{this.props.activeView === 'list' ? 'Queue' : 'Now playing'}</h1>
        <IconButton label="about the app" className="icon-button icon-button--help" onClick={this.props.onAboutClick} icon={<HelpButton className="icon icon--help" width={27} />} />
        <IconButton label="close about" className="icon-button icon-button--close" onClick={this.props.onCloseClick} icon={<CloseButton className="icon icon--close" width={12} />} />
      </nav>
    );
  }
}

export default Menu;
