import React from 'react';
import renderer from 'react-test-renderer';
import List from '.';
import { shallow } from 'enzyme';

const track = {
  id: 1,
  artwork_url: 'artwork_url',
  title: 'title',
  artist: 'artist',
  percentage: 1
};

const tracks = [track];
const buildComponent = (tracks, track, click) => <List onClick={click} tracks={tracks} track={track} />

describe('Loader', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(buildComponent(tracks, track, () => { }));

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('constructor', () => {
    it('defines onClick', async () => {
      const component = shallow(buildComponent(tracks, track, () => { }));

      expect(component.instance().onClick).toBeDefined();
    });
  });

  describe('onClick', () => {
    it('call props.onClick', async () => {
      const click = jest.fn();
      const component = shallow(buildComponent(tracks, track, click));

      component.instance().onClick({
        currentTarget: {
          attributes: {
            'data-id': {
              value: 1
            }
          }
        }
      });

      expect(click).toBeCalledWith(track.id);
    });
  });
});
