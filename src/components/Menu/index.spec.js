import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';
import { enzymeConfig } from '../../enzimeConfig';

enzymeConfig();

describe('Menu', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<Menu
      activeView='home'
      onBackClick={() => { }}
      onAboutClick={() => { }}
      onCloseClick={() => { }}
    />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
