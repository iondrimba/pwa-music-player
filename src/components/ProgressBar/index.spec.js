import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';
import { enzymeConfig } from '../../enzimeConfig';

enzymeConfig();

describe('ProgressBar', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<ProgressBar percent={1} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
