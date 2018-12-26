/* eslint-disable no-undef */
import React, { Component } from 'react';
import FastAverageColor from 'fast-average-color/dist/index.es6';
import './App.scss';

const percent = (current, total) => {
  return (current / total) * 100
}

const convertSecondsToMMss = (totalSeconds) => {
  const sec_num = parseInt(totalSeconds, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  return `${minutes}:${seconds}`;
}

class App extends Component {
  constructor() {
    super();

    this.fac = new FastAverageColor();
    this.state = {
      tracks: [],
      id: 0,
      currentTime: 0,
    }
  }

  componentDidMount() {
    fetch(`http://api.soundcloud.com/users/${process.env.REACT_APP_SOUNDCLOUD_USER_ID}/playlists?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState(() => ({
          tracks: [...result[0].tracks.map((track) => {
            Object.assign(track, { currentTime: 0 });

            return track;
          })],
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
      const scale = percent(evt.target.currentTime, evt.target.duration) / 100;


      const item = document.querySelector(`[item-id="${this.state.id}"]`);
      item.querySelector('.progress-bar');

      const track = this.state.tracks.filter((track) => Number(this.state.id) === track.id)[0];
      track.currentTime = evt.target.currentTime;

      this.setState({currentTime: track.currentTime});

      item.querySelector('.progress-bar').style = `transform: scaleX(${scale})`;

    })
  }

  onPlayClick = (evt) => {
    const id = evt.currentTarget.attributes['track-id'].value;
    const track = this.state.tracks.filter((track) => Number(id) === track.id)[0];

    this.audioElement.src = `${track.stream_url}?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`;

    this.audioCtx.resume();
    this.audioElement.play();

    this.setState({ id });
  }

  onPauseClick = (evt) => {
    this.audioElement.pause();
  }

  onLoadImage = async (evt) => {
    const color = this.fac.getColor(evt.target, { algorithm: 'simple' });
    evt.target.parentNode.style.backgroundColor = color.hex;
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
                <img crossOrigin="" src={track.artwork_url} alt={`album artwork from track ${track.title}`} onLoad={this.onLoadImage} />
                <button onClick={this.onPlayClick} track-id={track.id}>play</button>
                <button onClick={this.onPauseClick} track-id={track.id}>pause</button>
                <div className="progress-bar"></div>
                <time className="current">{convertSecondsToMMss(Number(track.id) === Number(this.state.id) ? this.state.currentTime : 0)}</time>
                <time className="duration">{convertSecondsToMMss(track.duration / 1000)}</time>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
