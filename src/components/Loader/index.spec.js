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
    it('add class active', async () => {
      jest.spyOn(Loader.prototype, '_addActiveClass');

      mount(<Loader />);

      expect(Loader.prototype._addActiveClass).toBeCalled();
    });
  });
});
