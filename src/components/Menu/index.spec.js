import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';
import sleep from '../../helpers/sleep';
import { enzymeConfig, mount } from '../../enzimeConfig';

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

  describe('componentDidMount', () => {
    it('adds class active to hidden elements', async () => {
      Menu.prototype._activeHiddenElements = jest.fn();

      const component = mount(<Menu activeView='home' onBackClick={() => { }} onAboutClick={() => { }}onCloseClick={() => { }} />);

      await sleep(1300);

      expect(component.instance()._activeHiddenElements).toBeCalled();
    });
  });

  describe('componentDidUpdate', () => {
    it('removes and adds class active to title', async () => {
      jest.spyOn(Menu.prototype, '_animateTitle');

      const component = mount(<Menu activeView='home' onBackClick={() => { }} onAboutClick={() => { }}onCloseClick={() => { }} />);

      component.setProps({ activeView: 'about' });

      await sleep(100);

      expect(component.instance()._animateTitle).toBeCalled();
    });
  });

});
