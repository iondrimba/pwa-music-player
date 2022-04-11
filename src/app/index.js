import React, { PureComponent, Suspense, lazy } from 'react';
import { createBrowserHistory } from 'history'
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

    this.playlistUrl = process.env.REACT_APP_API_URL;
    this.state = {
      ...initialState
    };

    this.history = createBrowserHistory();
  }

  componentDidMount() {
    this.history.listen((history) => {
      this.setState(() => {
        return { currentView: history.location.state.view || '/' };
      });

      if (history.location.state.view === 'list' && !this.state.tracks[0].id) {
        this.fetchPlayList();
      };
    });

    this.setupAudio();

    this.history.push('/', { view: 'home' });
  }

  onStartClick = () => {
    this.changeView('list');
  }

  fetchPlayList = async () => {
    const result = await fetch(this.playlistUrl);
    const tracks = await result.json();

    this.updateSate(tracks);
  }

  updateSate(tracks) {
    const updatedState = {
      tracks: [...tracks.map((track, index) => {
        return Object.assign({}, {
          ...this.state.track,
          id: track.id,
          stream_url: `${this.playlistUrl}/stream/${track.id}`,
          uri: track.uri,
          duration: track.duration,
          favoritings_count: track.favoritings_count,
          artist: track.user.username,
          artwork_url: track.artwork_url ? track.artwork_url.replace('large', 't50x50') : '',
          title: track.title.toLowerCase(),
          permalink_url: track.permalink_url,
          index,
        });
      })],
      playlistLoaded: true,
    };

    this.setState(() => updatedState);
  }

  changeView(view) {
    this.history.push(`/${view}`, { view });
  }

  setTrack(track) {
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

  canChangeTrack() {
    return this.state.changingTrack === false;
  }

  getNextTrack() {
    const nextTrack = this.state.tracks[this.state.track.index + 1];

    return nextTrack ? { ...nextTrack } : null;
  }

  getPreviousTrack() {
    const prevTrack = this.state.tracks[this.state.track.index - 1];

    return prevTrack ? { ...prevTrack } : null;
  }

  changeTrack(track) {
    this.audio.setAudioSource('');

    if (this.canChangeTrack() && track) {
      this.setTrack(track);
      this.onPlayClick(track);
    }
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

    this.changeView('detail');

    this.onPlayClick(track);
  }

  onPlayClick = async (track) => {
    if (!track.played) {
      const result = await fetch(track.stream_url);
      const urlstream = await result.json();

      this.audio.setAudioSource(urlstream.http_mp3_128_url);
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
      return { currentView: this.history.location.state.view || '/' };
    });
  }

  onAboutClick = () => {
    this.changeView('about');
  }

  onPlayNext = () => {
    this.changeTrack(this.getNextTrack());
  }

  onPlayPrev = () => {
    this.changeTrack(this.getPreviousTrack());
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
