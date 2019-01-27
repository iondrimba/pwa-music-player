import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader';
import sleep from '../../helpers/sleep';
import { enzymeConfig, mount } from '../../enzimeConfig';

enzymeConfig();

describe('Loader', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<Loader />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    fit('add class animate', async () => {
      jest.spyOn(Loader.prototype, '_addActiveClass');

      const component = mount(<Loader />);

      await sleep(100);

      expect(Loader.prototype._addActiveClass).toBeCalled();
      expect(component.instance().loader.current.className).toContain('animate');

      component.unmount();
    });
  });
});
