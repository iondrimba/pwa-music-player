import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '.';
import { shallow } from 'enzyme';

describe('ProgressBar', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<ProgressBar percent={1} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('shouldComponentUpdate', () => {
    describe('when percent changes', () => {
      it('return true', () => {
        const component = shallow(<ProgressBar percent={1} />);

        const result = component.instance().shouldComponentUpdate({ percent: .1 });

        expect(result).toBe(true);
      });
    });

    describe('when percent is the same', () => {
      it('return false', () => {
        const component = shallow(<ProgressBar percent={1} />);

        const result = component.instance().shouldComponentUpdate({ percent: 1 });

        expect(result).toBe(false);
      });
    });
  });
});
