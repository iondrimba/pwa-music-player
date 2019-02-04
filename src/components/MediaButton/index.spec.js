import React from 'react';
import renderer from 'react-test-renderer';
import MediaButton from '.';
import { ReactComponent as RepeatButton } from '../../icons/repeat-arrows.svg';
import { shallow } from 'enzyme';
const buildComponent = (active = true) => <MediaButton name='click me' active={active} icon={<RepeatButton className="icon icon--back" width={16} />} onClick={() => { }} />

describe('MediaButton', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(buildComponent());

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('shouldComponentUpdate', () => {
    describe('when active prop has changed', () => {
      it('return true', () => {
        const component = shallow(buildComponent(true));

        const result = component.instance().shouldComponentUpdate({ active: false });

        expect(result).toBe(true);
      });
    });

    describe('when active prop has not changed', () => {
      it('return false', () => {
        const component = shallow(buildComponent(true));

        const result = component.instance().shouldComponentUpdate({ active: true });

        expect(result).toBe(false);
      });
    });
  });
});
