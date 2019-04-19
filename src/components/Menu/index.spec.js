import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '.';
import sleep from '../../helpers/sleep';
import { mount } from 'enzyme';

describe('Menu', () => {
  describe('componentDidMount', () => {
    it('adds class active to hidden elements', async () => {
      jest.spyOn(Menu.prototype, '_activeHiddenElements');

      const component = mount(<Menu activeView='home' onBackClick={() => { }} onAboutClick={() => { }}onCloseClick={() => { }} />);

      await sleep(1300);

      [...component.instance().menu.current.querySelectorAll('.hidden')].map((elmt) => expect(elmt.className).toContain('active'));

      expect(Menu.prototype._activeHiddenElements).toBeCalled();
    });
  });

  describe('componentDidUpdate', () => {
    it('removes and adds class active to title', async () => {
      jest.spyOn(Menu.prototype, '_animateTitle');

      const component = mount(<Menu activeView='home' onBackClick={() => { }} onAboutClick={() => { }}onCloseClick={() => { }} />);

      component.setProps({ activeView: 'about' });

      await sleep(1000);

      expect(component.instance().title.current.className).toContain('active');
      expect(component.instance()._animateTitle).toBeCalled();

      component.unmount();
    });
  });

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
