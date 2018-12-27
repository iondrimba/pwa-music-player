import React, { Component } from 'react';
import { ReactComponent as HelpButton } from '../../icons/help-button.svg';
import { ReactComponent as BackButton } from '../../icons/left-arrow.svg';
import styles from './styles.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <a href="/"><BackButton width={30}/></a>
        <h1>Queue</h1>
        <a href="/about"><HelpButton  width={30}/></a>
      </nav>
    );
  }
}

export default Menu;
