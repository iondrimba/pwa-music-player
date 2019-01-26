import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader';
import { enzymeConfig } from '../../enzimeConfig';

enzymeConfig();

describe('Loader', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<Loader />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
