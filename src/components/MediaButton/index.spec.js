import React from 'react';
import renderer from 'react-test-renderer';
import MediaButton from './MediaButton';
import { ReactComponent as RepeatButton } from '../../icons/repeat-arrows.svg';
import { enzymeConfig } from '../../enzimeConfig';

enzymeConfig();

describe('MediaButton', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<MediaButton
      name='click me'
      icon={<RepeatButton className="icon icon--back" width={16} />}
      onClick={() => { }}
    />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
