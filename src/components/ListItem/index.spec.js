import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '.';
import { shallow } from 'enzyme';

const buildComponent = () => <ListItem
  track={{
    id: 1,
    artwork_url: '/john-doe.jpg',
    title: 'John Doe title',
    artist: 'John Doe',
  }}
  selectedTrack={{
    id: 1,
    percentage: 1,
    playing: false,
    title: 'Track 1',
  }}
  onClick={() => { }} />

describe('ListItem', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(buildComponent());

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('shouldComponentUpdate', () => {
    describe('when same track and different percentage played', () => {
      it('returns true', () => {
        const component = shallow(buildComponent());

        const result = component.instance().shouldComponentUpdate({ selectedTrack: { id: 1, percentage: .1 } });

        expect(result).toBe(true);
      });
    });

    describe('when same track and same percentage played', () => {
      it('returns false', () => {
        const component = shallow(buildComponent());

        const result = component.instance().shouldComponentUpdate({ selectedTrack: { id: 1, percentage: 1 } });

        expect(result).toBe(false);
      });
    });

    describe('when different track id and title', () => {
      it('returns true', () => {
        const component = shallow(buildComponent());

        const result = component.instance().shouldComponentUpdate({ selectedTrack: { id: 2, title: 'New John Doe' } });

        expect(result).toBe(true);
      });
    });

    describe('when changing active state', () => {
      it('returns true', () => {
        const component = shallow(buildComponent());

        const result = component.instance().shouldComponentUpdate({ selectedTrack: { id: 2, active: true } });

        expect(result).toBe(true);
      });
    });
  });
});
