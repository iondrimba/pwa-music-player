import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '.';
import { mount } from 'enzyme';

describe('Loader', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<Loader />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('add class animate', async () => {
      jest.spyOn(Loader.prototype, '_addActiveClass');

      mount(<Loader />);

      setTimeout(() => {
        expect(Loader.prototype._addActiveClass).toBeCalled();
      }, 100);
    });
  });
});
