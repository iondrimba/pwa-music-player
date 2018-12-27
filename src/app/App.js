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
      previousView: '/',
      currentView: '',
      track: {
        currentTime: 0,
        percentage: 0,
        paused: false,
      },
    };

    this.views = {
      list: {
        view: (key) => {
          this.views[key].loaded = true;

          return <List tracks={this.state.tracks} onClick={this.onListClck} />
        },
        loaded: false,
      },
      detail: {
        view: (key) => {
          this.views[key].loaded = true;

          return <Detail track={this.state.track} onPlayClick={this.onPlayClick} onPauseClick={this.onPauseClick} />
        },
        loaded: false,
      },
      about: {
        view: (key) => {
          this.views[key].loaded = true;

          return <About />
        },
        loaded: false
      }
    };

    this.history = createHistory();
    this.fetchPlayList = this.fetchPlayList.bind(this);
    this.onListClck = this.onListClck.bind(this);

    this.history.listen((location, action) => {
      this.setState({ currentView: location.state });
    });

    this.onPauseClick = this.onPauseClick.bind(this);
    this.onPlayClick = this.onPlayClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.onAboutClick = this.onAboutClick.bind(this);
  }

  componentDidMount() {
    this.setupAudio();

    this.history.push('/', 'home');
  }

  fetchPlayList() {
    if (this.state.tracks.length === 0) {
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
    } else {
      this.history.push('/List', 'list');
    }
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
    this.setState({ track: { ...this.selectTrack(id), currentTime: 0, percentage: 0 } });

    this.audioElement.src = '';

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

  onBackClick() {
    this.history.go(-1);

    this.setState({ currentView: this.history.location.state || '/' });
  }

  onAboutClick() {

  }

  displayView(key) {
    if (this.views[this.state.currentView] && !this.views[this.state.currentView].loaded) {
      return this.views[this.state.currentView].view(this.state.currentView);
    } else {
      const view = Object.entries(this.views).filter((k, v) => {
        return k[0] === key && k[1].loaded;
      });

      return view.length ? view[0][1].view(key) : null;
    }
  }

  render() {
    return (
      <div className="app">
        <div className="shell">
          <Menu history={this.history} activeView={this.state.currentView} onBackClick={this.onBackClick} onAboutClick={this.onAboutClick} />
          <div className="page">
            <div className="home">
              <Home onStartClick={this.fetchPlayList} />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <div className={`list ${this.state.currentView === 'list' ? 'active' : ''}`}>
                {this.displayView('list')}
              </div>
              <div className={`detail ${this.state.currentView === 'detail' ? 'active' : ''}`}>
                {this.displayView('detail')}
              </div>
            </Suspense>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
