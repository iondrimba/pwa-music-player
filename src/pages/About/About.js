import React, { Component, Fragment } from 'react';
import styles from './styles.scss';

class About extends Component {

  render() {
    return (
      <Fragment>
        <div className="content" tabIndex="-1">
          <h1 tabIndex="-1">PWA Music Player</h1>
          <p>This is a personal project built in my spare time for learning purposes.</p>
          <h2>Credits:</h2>
          <ul>
            <li>Design inspired by <a tabIndex="-1" href="https://dribbble.com/shots/3000629-Music-Player-Sketch-Freebie" target="_blank"  rel="noopener noreferrer"> Armas Nurbahari </a> </li>
            <li>Songs API by <a tabIndex="-1" href="https://developers.soundcloud.com/docs/api" target="_blank"  rel="noopener noreferrer">Soundcloud</a></li>
            <li>Bootstrapped with Create React App</li>
            <li>Pause icon by <a tabIndex="-1" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a tabIndex="-1" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a tabIndex="-1" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"  rel="noopener noreferrer">CC 3.0 BY</a></li>
            <li>Left arrow icon by <a tabIndex="-1" href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">Lucy G</a> from <a tabIndex="-1" href="https://www.flaticon.com/"
              title="Flaticon">www.flaticon.com</a> is licensed by <a tabIndex="-1" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"  rel="noopener noreferrer">CC 3.0 BY</a></li>
            <li>Play arrow icon by <a tabIndex="-1" href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a tabIndex="-1" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a tabIndex="-1" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"  rel="noopener noreferrer">CC 3.0 BY</a></li>

            <li>Help icon by <a tabIndex="-1" href="https://www.flaticon.com/authors/anton-saputro" title="Anton Saputro">Anton Saputro</a> from <a tabIndex="-1" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a tabIndex="-1" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"  rel="noopener noreferrer">CC 3.0 BY</a>
            </li>
            <li>
              Close icon by <a tabIndex="-1" href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a tabIndex="-1" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a tabIndex="-1" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"  rel="noopener noreferrer">CC 3.0 BY</a>
            </li>

          </ul>
        </div>

      </Fragment>
    );
  }
}

export default About;
