import React from 'react';
import renderer from 'react-test-renderer';
import AlbumCover from './AlbumCover';
import { enzymeConfig } from '../../enzimeConfig';

enzymeConfig();

describe('AlbumCover', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<AlbumCover src="/john-doe.jpg" alt="John Doe alt." />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
