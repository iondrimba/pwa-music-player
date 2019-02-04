import React from 'react';
import renderer from 'react-test-renderer';
import Page from '.';

describe('Page', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<Page
      active={true}
      className='home'
      children={<div>Hello</div>}
    />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
