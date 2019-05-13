import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

if (window.AudioContext) {
  window.audioContext = new window.AudioContext();
}

ReactDOM.render(<App audioContext={window.audioContext} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
