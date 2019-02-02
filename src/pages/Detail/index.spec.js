import React from 'react';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { shallow } from 'enzyme';

const track = {
  id: 1,
  artwork_url: 'artwork_url',
  title: 'title',
  artist: 'artist',
  percentage: 1
};

describe('Detail', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<Detail track={track}
      onPlayClick={() => {}}
      onPlayNext={() => {}}
      onPlayPrev={() => {}}
      onPauseClick={() => {}} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
