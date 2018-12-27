import React, { Component } from 'react';
import { ReactComponent as HelpButton } from '../../icons/help-button.svg';
import { ReactComponent as BackButton } from '../../icons/left-arrow.svg';
import styles from './styles.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.onBackClick = this.onBackClick.bind(this);
    this.onAboutClick = this.onAboutClick.bind(this);
  }

  onBackClick() {
    this.props.onBackClick();
  }

  onAboutClick() {
    this.props.onAboutClick();
  }

  render() {
    return (
      <nav className={`menu menu--${this.props.activeView}`}>
        <BackButton width={30} onClick={this.onBackClick} />
        <h1 className="menu__title">{this.props.activeView === 'list' ? 'Queue' : 'Now playing'}</h1>
        <HelpButton className="help" onClick={this.onAboutClick} width={30} />
      </nav>
    );
  }
}

export default Menu;
