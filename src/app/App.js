import React, { PureComponent, Suspense, lazy } from 'react';
import createHistory from 'history/createBrowserHistory';
import Home from '../pages/Home/Home';
import percent from '../helpers/percent';
import Menu from '../components/Menu/Menu';
import Page from '../components/Page/Page';
import Loader from '../components/Loader/Loader';
import AudioHelper from '../helpers/audio';
import initialData from './data';
import './style.scss';

const List = lazy(() => import('../pages/List/List'));
const About = lazy(() => import('../pages/About/About'));
const Detail = lazy(() => import('../pages/Detail/Detail'));

class App extends PureComponent {
  constructor(props) {
    super(props);

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
        artwork_url: '',
      },
    };

    this.history = createHistory();
    this.history.listen((location, action) => {
      this.setState({ currentView: location.state });

      if (location.state === 'list') {
        if (!this.state.tracks[0].id) {
          this.fetchPlayList();
        }
      };
    });
  }

  componentDidMount() {
    this.audioHelper = new AudioHelper(document.querySelector('#audio'));
    this.setupAudio();

    this.history.push('/', 'home');
  }

  onStartClick = () => {
    this.history.push('/List', 'list');
  }

  fetchPlayList = () => {
    fetch(`http://api.soundcloud.com/users/${process.env.REACT_APP_SOUNDCLOUD_USER_ID}/playlists?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState(() => ({
          tracks: [...result[0].tracks.map((track, index) => {
            return Object.assign({}, {
              ...this.state.track,
              id: track.id,
              stream_url: track.stream_url,
              uri: track.uri,
              duration: track.duration,
              favoritings_count: track.favoritings_count,
              artist: track.user.username,
              artwork_url: track.artwork_url.replace('large', 't50x50'),
              title: track.title.toLowerCase(),
              permalink_url: track.permalink_url,
              index,
            });
          })],
          playlistLoaded: true,
        }));

        result = null;
      });
  }

  selectTrack = (id) => {
    return this.state.tracks.filter((track) => Number(id) === track.id)[0];
  }

  setupAudio() {
    this.timeupdate = this.timeupdate.bind(this);
    this.audioHelper.setup();
    this.audioHelper.setVolume(.1);
    this.audioHelper.setTimerHandler(this.timeupdate);
  }

  timeupdate = (evt) => {
    this.setState({ track: { ...this.state.track, currentTime: evt.target.currentTime, percentage: percent(evt.target.currentTime, evt.target.duration) / 100 } });
  }

  onListClck = (id) => {
    if (id !== this.state.track.id) {
      this.audioHelper.setAudioSource('');
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
      this.audioHelper.setAudioSource(`${track.stream_url}?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`);
    }

    this.setState({ track: { ...track, paused: false, playing: true, played: true } });

    this.audioHelper.resume();
    this.audioHelper.play();
  }

  onPauseClick = (track) => {
    this.audioHelper.pause();

    this.setState({ track: { ...track, paused: true, playing: false } });
  }

  onBackClick = () => {
    this.history.go(-1);

    this.setState({ currentView: this.history.location.state || '/' });
  }

  onAboutClick = () => {
    this.history.push('/about', 'about');
  }

  onPlayNext = () => {
    if (this.state.tracks[this.state.track.index + 1]) {
      const nextTrack = { ...this.state.tracks[this.state.track.index + 1] };

      this.setState({ track: nextTrack, currentTime: 0, paused: true, played: false, playing: false });

      this.playTrack(nextTrack);
    }
  }

  onPlayPrev = () => {
    if (this.state.tracks[this.state.track.index - 1]) {
      const nextTrack = { ...this.state.tracks[this.state.track.index - 1] };

      this.setState({ track: nextTrack, currentTime: 0, paused: true, played: false, playing: false });

      this.playTrack(nextTrack);
    }
  }

  render() {
    return (
      <main className="app">
        <audio id="audio" crossOrigin="anonymous"></audio>
        <div className="shell">
          <Menu history={this.history}
            activeView={this.state.currentView}
            onBackClick={this.onBackClick}
            onAboutClick={this.onAboutClick}
            onCloseClick={this.onBackClick} />
          <div className="page-wrapper">
            <Page className="home" active={this.state.currentView === 'home'}>
              <Home onStartClick={this.onStartClick} />
            </Page>
            <Suspense fallback={<Loader />}>
              <Page className="list" active={this.state.currentView === 'list'}>
                <List track={this.state.track} tracks={this.state.tracks} onClick={this.onListClck} />
              </Page>
              <Page className="detail" active={this.state.currentView === 'detail'}>
                <Detail track={this.state.track}
                  onPlayClick={this.playTrack}
                  onPlayNext={this.onPlayNext}
                  onPlayPrev={this.onPlayPrev}
                  onPauseClick={this.onPauseClick} />
              </Page>
              <Page className="about" active={this.state.currentView === 'about'}>
                <About />
              </Page>
            </Suspense>
          </div>
        </div>
      </main >
    );
  }
}

export default App;
