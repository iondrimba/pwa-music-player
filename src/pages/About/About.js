import React, { PureComponent, Fragment } from 'react';
import './styles.scss';

class About extends PureComponent {
  constructor() {
    super();

    this.state = {
      credits: [
        {
          label: 'Design inspired by',
          link: 'https://dribbble.com/shots/3000629-Music-Player-Sketch-Freebie',
          author: 'Armas Nurbahari'
        },
        {
          label: 'Songs API by',
          link: 'https://developers.soundcloud.com/docs/api',
          author: 'Soundcloud'
        },
        {
          label: 'Pause icon by',
          link: 'https://www.flaticon.com/authors/smashicons',
          author: 'Smashicons'
        },
        {
          label: 'Left arrow icon by',
          link: 'https://www.flaticon.com/authors/lucy-g',
          author: 'Lucy G'
        },
        {
          label: 'Play arrow icon by',
          link: 'https://www.freepik.com/',
          author: 'Freepik'
        },
        {
          label: 'Help icon by',
          link: 'https://www.flaticon.com/authors/anton-saputro',
          author: 'Anton Saputro'
        },
        {
          label: 'Close icon by',
          link: 'https://www.flaticon.com/authors/chanut',
          author: 'Chanut'
        },
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <h1 tabIndex="-1">PWA Music Player</h1>
          <p>This is a personal project built in my spare time for learning purposes.</p>
          <h2>Credits:</h2>
          <ul>
            {
              this.state.credits.map((license) => {
                return <li>{license.label} <a tabIndex="-1" target="_blank" rel="noopener noreferrer" href={license.link} >{license.author}</a></li>
              })
            }
          </ul>
        </div>

      </Fragment>
    );
  }
}

export default About;
