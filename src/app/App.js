import React, { Component, Suspense, lazy } from 'react';
import createHistory from 'history/createBrowserHistory';
import Home from '../pages/Home/Home';
import percent from '../helpers/progress';
import Menu from '../components/Menu/Menu';
import initialData from './data';
import styles from './style.scss';

const List = lazy(() => import('../pages/List/List'));
const About = lazy(() => import('../pages/About/About'));
const Detail = lazy(() => import('../pages/Detail/Detail'));

class App extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [...initialData],
      previousView: '/',
      currentView: '',
      track: {
        currentTime: 0,
        percentage: 0,
        paused: true,
        played: false,
        playing: false,
      },
    };

    this.history = createHistory();
    this.history.listen((location, action) => {
      this.setState({ currentView: location.state });

      if (location.state === 'list') {
        this.fetchPlayList()
      };
    });

    this.views = {
      list: {
        view: (key) => {
          this.views[key].loaded = true;

          return <List track={this.state.track} tracks={this.state.tracks} onClick={this.onListClck} />
        },
        loaded: false,
      },
      detail: {
        view: (key) => {
          this.views[key].loaded = true;

          return <Detail track={this.state.track}
            onPlayClick={this.playTrack}
            onPlayNext={this.onPlayNext}
            onPlayPrev={this.onPlayPrev}
            onPauseClick={this.onPauseClick} />
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
  }

  componentDidMount() {
    this.setupAudio();

    this.history.push('/', 'home');
  }

  onStartClick = () => {
    this.history.push('/List', 'list');
  }

  fetchPlayList = () => {
    if (!this.state.tracks[0].id) {
      fetch(`http://api.soundcloud.com/users/${process.env.REACT_APP_SOUNDCLOUD_USER_ID}/playlists?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.setState(() => ({
            tracks: [...result[0].tracks.map((track, index) => {
              return Object.assign({}, {
                id: track.id,
                stream_url: track.stream_url,
                uri: track.uri,
                duration: track.duration,
                favoritings_count: track.favoritings_count,
                artist: track.user.username,
                artwork_url: track.artwork_url.replace('large', 't50x50'),
                title: track.title.toLowerCase(),
                index,
                ...this.state.track,
              });
            })],
            playlistLoaded: true,
          }));

          result = null;
        });
    }
  }

  selectTrack = (id) => {
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

    this.audioElement.volume = .1;
    this.audioElement.addEventListener('timeupdate', this.timeupdate.bind(this));

    this.timeupdate = this.timeupdate.bind(this);
  }

  timeupdate = (evt) => {
    this.setState({ track: { ...this.state.track, currentTime: evt.target.currentTime, percentage: percent(evt.target.currentTime, evt.target.duration) / 100 } });
  }

  onListClck = (id) => {
    if (id !== this.state.track.id) {
      this.audioElement.src = '';
    }

    this.setState({
      track: {
        ...this.selectTrack(id),
        currentTime: 0,
        percentage: 0,
        playing: this.state.track.id === id ? this.state.track.playing : false,
        played: this.state.track.id === id ? this.state.track.played : false,
        paused: this.state.track.id === id ? this.state.track.paused : true,
      }
    });

    this.history.push(`/Destail/${id}`, 'detail');
  }

  playTrack = (track) => {
    if (!track.played) {
      this.audioElement.src = `${track.stream_url}?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`;
    }

    this.setState({ track: { ...track, paused: false, playing: true, played: true } });

    this.audioCtx.resume();
    this.audioElement.play();
  }

  onPauseClick = (track) => {
    this.audioElement.pause();

    this.setState({ track: { ...track, paused: true, playing: false } });
  }

  onBackClick = () => {
    this.history.go(-1);

    this.setState({ currentView: this.history.location.state || '/' });
  }

  onAboutClick = () => {
    this.history.push('/about', 'about');
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

  onPlayNext = () => {
    const nextTrack = { ...this.state.tracks[this.state.track.index + 1] };

    this.setState({ track: nextTrack, currentTime: 0, paused: true, played: false, playing: false });

    this.playTrack(nextTrack);
  }

  onPlayPrev = () => {
    const nextTrack = { ...this.state.tracks[this.state.track.index - 1] };

    this.setState({ track: nextTrack, currentTime: 0, paused: true, played: false, playing: false });

    this.playTrack(nextTrack);
  }

  render() {
    return (
      <div className="app">
        <div className="shell">
          <Menu history={this.history}
            activeView={this.state.currentView}
            onBackClick={this.onBackClick}
            onAboutClick={this.onAboutClick}
            onCloseClick={this.onBackClick} />
          <div className="page-wrapper">
            <div className="home page">
              <Home onStartClick={this.onStartClick} />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <div className={`list ${this.state.currentView === 'list' ? 'page active' : 'page unactive'}`}>
                {this.displayView('list')}
              </div>
              <div className={`detail ${this.state.currentView === 'detail' ? 'page active' : 'page unactive'}`}>
                {this.displayView('detail')}
              </div>
              <div className={`about ${this.state.currentView === 'about' ? 'page active' : 'page unactive'}`}>
                {this.displayView('about')}
              </div>
            </Suspense>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
