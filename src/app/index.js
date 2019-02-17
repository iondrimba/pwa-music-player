import React, { PureComponent, Suspense, lazy } from 'react';
import createHistory from 'history/createBrowserHistory';
import Home from '../pages/Home';
import percent from '../helpers/percent';
import Menu from '../components/Menu';
import Page from '../components/Page';
import Loader from '../components/Loader';
import Audio from '../helpers/audio';
import { initialState } from '../data';
import './style.scss';

const List = lazy(() => import('../pages/List'));
const About = lazy(() => import('../pages/About'));
const Detail = lazy(() => import('../pages/Detail'));

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.playlistUrl = `https://api.soundcloud.com/users/${process.env.REACT_APP_SOUNDCLOUD_USER_ID}/playlists?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}
`;
    this.state = {
      ...initialState
    };

    this.history = createHistory();
    this.history.listen((location, action) => {
      this.setState({ currentView: location.state });

      if (location.state === 'list' && !this.state.tracks[0].id) {
        this.fetchPlayList();
      };
    });
  }

  componentDidMount() {
    this.setupAudio();

    this.history.push('/', 'home');
  }

  onStartClick = () => {
    this.history.push('/List', 'list');
  }

  fetchPlayList = async () => {
    const result = await fetch(this.playlistUrl);
    const data = await result.json();
    const updatedState = {
      tracks: [...data[0].tracks.map((track, index) => {
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
    };

    this.setState(() => updatedState);
  }

  selectTrack = (id) => {
    return this.state.tracks.filter((track) => Number(id) === track.id)[0];
  }

  setupAudio() {
    this.timeupdate = this.timeupdate.bind(this);
    this.audioStop = this.audioStop.bind(this);

    this.audio = new Audio(document.querySelector('#audio'), this.props.audioContext);
    this.audio.setup();
    this.audio.setTimerHandler(this.timeupdate);
    this.audio.setStopHandler(this.audioStop);
    this.audio.canplay(() => {
      this.setState(() => {
        return {
          changingTrack: false
        };
      });
    })
  }

  audioStop() {
    this.setState({
      track: {
        ...this.state.track, currentTime: 0, percentage: 0, playing: false,
        played: false,
        paused: true,
      }
    });
  }

  timeupdate = (evt) => {
    this.setState({
      track: {
        ...this.state.track, currentTime: evt.target.currentTime,
        percentage: percent(evt.target.currentTime, evt.target.duration) / 100
      }
    });
  }

  onListClick = (id) => {
    if (id !== this.state.track.id) {
      this.audio.setAudioSource('');
    }

    const track = {
      ...this.selectTrack(id),
      currentTime: 0,
      percentage: 0,
      playing: this.state.track.id === id ? this.state.track.playing : false,
      played: this.state.track.id === id ? this.state.track.played : false,
      paused: this.state.track.id === id ? this.state.track.paused : true,
    };

    this.setState(() => {
      return { track };
    });

    this.history.push(`/Detail/${id}`, 'detail');
  }

  onPlayClick = (track) => {
    if (!track.played) {
      this.audio.setAudioSource(`${track.stream_url}?client_id=${process.env.REACT_APP_SOUNDCLOUD_APP_CLIENT_ID}`);
    }

    this.setState(() => {
      return {
        track: {
          ...track,
          paused: false,
          playing: true,
          played: true
        }
      };
    });

    this.audio.resume();
    this.audio.play();
  }

  onPauseClick = (track) => {
    this.audio.pause();

    this.setState(() => {
      return {
        track: {
          ...track,
          paused: true,
          playing: false
        }
      }
    });
  }

  onBackClick = () => {
    this.history.go(-1);

    this.setState(() => {
      return { currentView: this.history.location.state || '/' };
    });
  }

  onAboutClick = () => {
    this.history.push('/about', 'about');
  }

  _setTrack(track) {
    this.setState(() => {
      return {
        track,
        currentTime: 0,
        paused: true,
        played: false,
        playing: false,
        changingTrack: true
      };
    });
  }

  _canChangeTrack() {
    return this.state.changingTrack === false;
  }

  _getNextTrack() {
    const nextTrack = this.state.tracks[this.state.track.index + 1];

    return nextTrack ? { ...nextTrack } : null;
  }

  _getPreviousTrack() {
    const prevTrack = this.state.tracks[this.state.track.index - 1];

    return prevTrack ? { ...prevTrack } : null;
  }

  _changeTrack(track) {
    if (this._canChangeTrack() && track) {
      this._setTrack(track);
      this.onPlayClick(track);
    }
  }

  onPlayNext = () => {
    this._changeTrack(this._getNextTrack());
  }

  onPlayPrev = () => {
    this._changeTrack(this._getPreviousTrack());
  }

  onRepeatClick = () => {
    const repeat = !this.state.repeat;

    this.setState(() => {
      return { repeat };
    });

    this.audio.repeat(repeat);
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
                <List track={this.state.track} tracks={this.state.tracks} onClick={this.onListClick} />
              </Page>
              <Page className="detail" active={this.state.currentView === 'detail'}>
                <Detail track={this.state.track}
                  repeat={this.state.repeat}
                  onRepeatClick={this.onRepeatClick}
                  onPlayClick={this.onPlayClick}
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
