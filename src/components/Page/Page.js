import React, { Component } from 'react';
import styles from './styles.scss';

class Page extends Component {
  render() {
    return (
      <section aria-hidden={!this.props.active} className={`${this.props.className} page ${this.props.active ? 'active' : 'unactive'}`}>
        {React.cloneElement(this.props.children, { active: this.props.active })}
      </section>
    );
  }
}

export default Page;
