import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from './IconButton';
import { ReactComponent as RepeatButton } from '../../icons/repeat-arrows.svg';

describe('IconButton', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<IconButton icon={<RepeatButton className="icon icon--back" width={16} />} label="Icon button label" className="xpto-class" onClick={() => { }} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
