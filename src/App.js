/* eslint-disable no-undef */
import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      player: {},
    }
  }

  componentDidMount() {
    fetch(`http://api.soundcloud.com/users/${process.env.REACT_APP_SOUNDCLOUD_USER_ID}/playlists?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState(() => ({
          tracks: [...result[0].tracks]
        }));

        this.setupAudio();
      });
  }

  setupAudio() {
    this.audioElement = document.getElementById('audio');
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioCtx.createAnalyser();

    this.source = this.audioCtx.createMediaElementSource(this.audioElement);
    this.source.connect(this.analyser);
    this.source.connect(this.audioCtx.destination);

    this.bufferLength = this.analyser.frequencyBinCount;

    this.frequencyData = new Uint8Array(this.bufferLength);
    this.audioElement.volume = .5;
  }

  onPlayClick = (evt) => {
    const id = evt.currentTarget.attributes['track-id'].value;

    this.audioElement.src = this.state.tracks[id].stream_url;

    this.audioCtx.resume();
    this.audioElement.play();
  }

  onPauseClick = (evt) => {
    this.audioElement.pause();
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.tracks.map((track) => {
              return <li key={track.id}>
                <h2>{track.title}</h2>
                <span>{track.user.username}</span>
                <img src={track.artwork_url} alt={`album artwork from track ${track.title}`} />
                <button onClick={this.onPlayClick} track-id={track.id}>play</button>
                <button onClick={this.onPauseClick} track-id={track.id}>pause</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
