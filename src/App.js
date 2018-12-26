/* eslint-disable no-undef */
import React, { Component } from 'react';
import './App.scss';

const percent = (current, total) => {
  return (current / total) * 100
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      audio: {},
      progress: {}
    }
  }

  componentDidMount() {
    fetch(`http://api.soundcloud.com/users/${process.env.REACT_APP_SOUNDCLOUD_USER_ID}/playlists?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState(() => ({
          tracks: [...result[0].tracks],
          id: 0,
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

    this.audioElement.addEventListener('loadeddata', (evt) => {
      console.log(evt.target.duration);
    })

    this.audioElement.addEventListener('timeupdate', (evt) => {
      const scale = percent(evt.target.currentTime, evt.target.duration)/100;


      const item = document.querySelector(`[item-id="${this.state.id}"]`);
      item.querySelector('.progress-bar');

      console.log(scale);

      item.querySelector('.progress-bar').style = `transform: scaleX(${scale})`;

    })
  }

  onPlayClick = (evt) => {
    const id = evt.currentTarget.attributes['track-id'].value;
    const track = this.state.tracks.filter((track) => Number(id) === track.id)[0];

    console.log(id, track, track.stream_url);

    this.audioElement.src = `${track.stream_url}?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`;

    this.audioCtx.resume();
    this.audioElement.play();

    this.setState({ id });
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
              return <li key={track.id} item-id={track.id}>
                <h2>{track.title}</h2>
                <span>{track.user.username}</span>
                <img src={track.artwork_url} alt={`album artwork from track ${track.title}`} />
                <button onClick={this.onPlayClick} track-id={track.id}>play</button>
                <button onClick={this.onPauseClick} track-id={track.id}>pause</button>
                <div className="progress-bar"></div>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
