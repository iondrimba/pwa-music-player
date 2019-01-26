import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';
import { enzymeConfig } from '../../enzimeConfig';

enzymeConfig();

describe('ListItem', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<ListItem
      track={{
        id: 1,
        artwork_url: '/john-doe.jpg',
        title: 'John Doe title',
        artist: 'John Doe',
      }}
      selectedTrack={{
        id: 1,
        percentage: '1',
        playing: false,
        title: 'Track 1',
      }}
      onClick={() => { }} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
