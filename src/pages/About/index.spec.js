import React from 'react';
import renderer from 'react-test-renderer';
import About from '.';

describe('About', () => {
  it('renders without errors', () => {
    const component = renderer.create(<About/>);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
