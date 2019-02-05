import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Page extends PureComponent {
  render() {
    return (
      <section aria-hidden={!this.props.active} className={`${this.props.className} page ${this.props.active ? 'active' : 'unactive'}`}>
        {React.cloneElement(this.props.children, { active: this.props.active })}
      </section>
    );
  }
}

Page.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Page;
