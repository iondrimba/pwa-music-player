import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '.';
import { shallow } from 'enzyme';

const sampleTrack = {
  id: 1,
  'artwork_url': 'artwork_url',
  title: 'title',
  artist: 'artist',
  percentage: 1,
  currentTime: 360,
  duration: 450,
  playing: false,
  paused: false,
  permalink_url: 'permalink_url',
};

const detail = ({
  track,
  onPlayClick = () => { },
  onRepeatClick = () => { },
  onPlayNext = () => { },
  onBackClick = () => { },
  onPlayPrev = () => { },
  onPauseClick = () => { } },
) => {
  return <Detail track={track}
    active={true}
    onRepeatClick={onRepeatClick}
    onPlayClick={onPlayClick}
    onPlayNext={onPlayNext}
    onBackClick={onBackClick}
    onPlayPrev={onPlayPrev}
    onPauseClick={onPauseClick} />
};

describe('Detail', () => {
  it('renders without errors', () => {
    const component = renderer.create(detail({ track: sampleTrack }));

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('onPlayClick', () => {
    it('calls props.onPlayClick', () => {
      const onPlayClick = jest.fn();
      const component = shallow(detail({ track: sampleTrack, onPlayClick }));

      component.instance().onPlayClick();

      expect(onPlayClick).toBeCalledWith(component.instance().props.track);
    });
  });

  describe('onPauseClick', () => {
    it('calls props.onPauseClick', () => {
      const onPauseClick = jest.fn();
      const component = shallow(detail({ track: sampleTrack, onPauseClick }));

      component.instance().onPauseClick();

      expect(onPauseClick).toBeCalledWith(component.instance().props.track);
    });
  });


  describe('onLinkClick', () => {
    it('calls window.open', () => {
      window.open = jest.fn();
      const onLinkClick = jest.fn();
      const component = shallow(detail({ track: sampleTrack, onLinkClick }));

      component.instance().onLinkClick();

      expect(window.open).toBeCalledWith(component.instance().props.track.permalink_url);
    });
  });
});
