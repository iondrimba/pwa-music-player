import React, { Component } from 'react';
import { ReactComponent as HelpButton } from '../../icons/help-button.svg';
import { ReactComponent as BackButton } from '../../icons/left-arrow.svg';
import { ReactComponent as CloseButton } from '../../icons/close.svg';
import styles from './styles.scss';

class Menu extends Component {
  render() {
    return (
      <nav className={`menu menu--${this.props.activeView}`}>
        <BackButton className="back-button" width={25} onClick={this.props.onBackClick} />
        <h1 className="menu__title">{this.props.activeView === 'list' ? 'Queue' : 'Now playing'}</h1>
        <HelpButton className="help" onClick={this.props.onAboutClick} width={25} />
        <CloseButton width={20} fill={'#ccc'} className="close-button" onClick={this.props.onCloseClick}/>
      </nav>
    );
  }
}

export default Menu;
