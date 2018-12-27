import React, { Component, Suspense, lazy } from 'react';
import createHistory from 'history/createBrowserHistory';
import Home from '../pages/Home/Home';
import Menu from '../components/Menu/Menu';
import styles from './style.scss';

const List = lazy(() => import('../pages/List/List'));
const About = lazy(() => import('../pages/About/About'));
const Detail = lazy(() => import('../pages/Detail/Detail'));

const percent = (current, total) => {
  return (current / total) * 100
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      currentView: '',
      track: {
        currentTime: 0,
        percentage: 0,
        paused: false,
      },
    }

    this.history = createHistory();
    this.fetchPlayList = this.fetchPlayList.bind(this);
    this.onListClck = this.onListClck.bind(this);

    this.history.listen((location, action) => {
      this.setState({ currentView: location.state });
    });

    this.onPauseClick = this.onPauseClick.bind(this);
    this.onPlayClick = this.onPlayClick.bind(this);
  }

  componentDidMount() {
    this.setupAudio();
  }

  fetchPlayList() {
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
          playlistLoaded: true,
        }));

        this.history.push('/List', 'list');
      });
  }

  selectTrack(id) {
    return this.state.tracks.filter((track) => Number(id) === track.id)[0];
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
    this.audioElement.addEventListener('timeupdate', this.timeupdate.bind(this));

    this.timeupdate = this.timeupdate.bind(this);
  }

  timeupdate(evt) {
    this.setState({ track: { ...this.state.track, currentTime: evt.target.currentTime, percentage: percent(evt.target.currentTime, evt.target.duration) / 100 } });
  }

  onListClck(id) {
    this.setState({ track: { ...this.selectTrack(id), currentTime: 0 } });

    this.history.push(`/Destail/${id}`, 'detail');
  }

  onPlayClick(track) {
    if (!track.paused) {
      this.audioElement.src = `${track.stream_url}?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`;
    }

    this.audioCtx.resume();
    this.audioElement.play();
  }

  onPauseClick(track) {
    this.audioElement.pause();

    this.setState({ track: { ...track, paused: true } });
  }

  render() {
    return (
      <div className="app">
        <div className="shell">
          <Menu />
          <div className="page">
            <div className="home">
              <Home onStartClick={this.fetchPlayList} />
            </div>
            <Suspense fallback={<div>Loading 1...</div>}>
              <div className="list">
                {this.state.currentView === 'list' ? <List tracks={this.state.tracks} onClick={this.onListClck} /> : null}
              </div>
              <div className="detail">
                {this.state.currentView === 'detail' ? <Detail
                  track={this.state.track}
                  onPlayClick={this.onPlayClick}
                  onPauseClick={this.onPauseClick} /> : null}
              </div>
            </Suspense>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
