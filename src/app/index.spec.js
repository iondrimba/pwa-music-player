import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Audio from '../helpers/audio';
import App from './index.js';
import mockTracks from '../data/mockTracks';
import mockPlaylistResponse from '../data/mockPlaylistResponse';
import { audioContext } from '../helpers/audio/mock';

jest.mock('../helpers/audio');
jest.mock('../helpers/classList');

describe('App', () => {
  beforeEach(() => {
    Audio.mockClear();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App audioContext={audioContext()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('does not crash when image without artwork_url', async () => {
    const component = shallow(<App audioContext={audioContext()} />);
    const instance = component.instance();

    expect(() => {
      instance.updateSate(mockPlaylistResponse)
    }).not.toThrow();
  });

  describe('onListClck', () => {
    it('selects new track', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();

      jest.spyOn(instance.history, 'push');

      component.setState({ tracks: mockTracks });

      instance.onListClick(26814427);

      expect(instance.history.push).toBeCalledWith(`/detail`, { view: 'detail' });
      expect(component.state('track').id).toEqual(mockTracks[0].id);
    });
  });

  describe.skip('onPlayClick', () => {
    it('plays track', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();

      jest.spyOn(instance.audio, 'resume');
      jest.spyOn(instance.audio, 'play');
      jest.spyOn(instance, 'setState');

      instance.onPlayClick({ ...mockTracks[0] });

      expect(component.state().track).toEqual({ ...Object.assign({}, mockTracks[0], { paused: true, playing: false, played: false }) });
      expect(instance.audio.resume).toBeCalled();
      expect(instance.audio.play).toBeCalled();
    });
  });

  describe('onPauseClick', () => {
    it('plays track', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();

      jest.spyOn(instance.audio, 'pause');
      jest.spyOn(instance, 'setState');

      instance.onPauseClick({ ...mockTracks[0] });

      expect(component.state().track).toEqual({ ...Object.assign({}, mockTracks[0], { playing: false }) });
      expect(instance.audio.pause).toBeCalled();
    });
  });

  describe('onBackClick', () => {
    it('goes to previous page', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();

      jest.spyOn(instance.history, 'go');

      instance.onBackClick();

      expect(component.state().currentView).toBe('home');
      expect(instance.history.go).toBeCalledWith(-1);
    });
  });

  describe('onStartClick', () => {
    it('goes to list of songs page', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();

      jest.spyOn(instance.history, 'push');

      instance.onStartClick();

      expect(component.state().currentView).toBe('list');
      expect(instance.history.push).toBeCalledWith('/list', { view: 'list' });
    });
  });

  describe('onAboutClick', () => {
    it('goes to about page', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();

      jest.spyOn(instance.history, 'push');

      instance.onAboutClick();

      expect(component.state().currentView).toBe('about');
      expect(instance.history.push).toBeCalledWith('/about', { view: 'about' });
    });
  });

  describe.skip('onPlayNext', () => {
    it('plays next track', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();
      component.setState({ tracks: mockTracks, track: { ...mockTracks[0] } });

      jest.spyOn(instance, 'onPlayClick');

      instance.onPlayNext();

      expect(component.state().track).toEqual({ ...Object.assign({}, mockTracks[1], { paused: false, playing: true, played: true }) });
      expect(instance.onPlayClick).toBeCalledWith({ ...mockTracks[1] });
    });
  });

  describe.skip('onPlayPrev', () => {
    it('plays previous track', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();
      component.setState({ tracks: mockTracks, track: { ...mockTracks[1] } });

      jest.spyOn(instance, 'onPlayClick');

      instance.onPlayPrev();

      expect(component.state().track).toEqual({ ...Object.assign({}, mockTracks[0], { paused: false, playing: true, played: true }) });
      expect(instance.onPlayClick).toBeCalledWith({ ...mockTracks[0] });
    });
  });

  describe('onRepeatClick', () => {
    it('keeps song on repeat', () => {
      const component = shallow(<App audioContext={audioContext()} />);
      const instance = component.instance();

      component.setState({ tracks: mockTracks, track: { ...mockTracks[1] } });

      jest.spyOn(instance.audio, 'repeat');

      instance.onRepeatClick();

      expect(component.state().repeat).toEqual(true);
      expect(instance.audio.repeat).toBeCalledWith(true);
    });
  });
})
