import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import IconButton from '.';
import { ReactComponent as RepeatButton } from '../../icons/repeat-arrows.svg';

describe('IconButton', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<IconButton icon={<RepeatButton className="icon icon--back" width={16} />} label="Icon button label" className="xpto-class" onClick={() => { }} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('when className changes', () => {
    it('updates button', () => {
      const component = shallow(<IconButton icon={<RepeatButton className="icon icon--back" width={16} />} label="Icon button label" className="xpto-class" onClick={() => { }} />);

      component.setProps({ className: 'icon-xpto' });

      expect(component.find('.icon-xpto').exists()).toBe(true);
    });
  });
});
