import React, { PureComponent, Fragment } from 'react';
import { credits } from '../../data';
import './style.scss';

class About extends PureComponent {
  constructor() {
    super();

    this.state = { credits };
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <h1 tabIndex="-1">PWA React Music Player</h1>
          <p>This is a personal project built in my spare time for learning purposes.</p>
          <h2>Credits:</h2>
          <ul>
            {
              this.state.credits.map((license) => {
                return <li key={license.label}>{license.label} <a tabIndex="-1" target="_blank" rel="noopener noreferrer" href={license.link} >{license.author}</a></li>
              })
            }
          </ul>
        </div>

      </Fragment>
    );
  }
}

export default About;
