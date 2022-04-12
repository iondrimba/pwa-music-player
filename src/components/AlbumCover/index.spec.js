import React from 'react';
import renderer from 'react-test-renderer';
import AlbumCover from '.';
import sleep from '../../helpers/sleep';
import { mount } from 'enzyme';

describe('AlbumCover', () => {
  it('renders defaultProps', () => {
    const component = renderer.create(<AlbumCover src="/john-doe.jpg" alt="John Doe alt." />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls onLoadImage', () => {
      const component = mount(<AlbumCover src="https://i1.sndcdn.com/artworks-000021994411-0lr2l2-t300x300.jpg" alt="John Doe alt." />);

      expect(component.instance().imageDummy.onload).toBeDefined();
    });
  });

  describe.skip('onLoadImage', () => {
    it('calls _hideLoader _setAlbumShadowColor _displayAlbumCover', async () => {
      const component = mount(<AlbumCover src="https://i1.sndcdn.com/artworks-000021994411-0lr2l2-t300x300.jpg" alt="John Doe alt." />);
      const instance = component.instance();

      jest.spyOn(AlbumCover.prototype, '_hideLoader');
      jest.spyOn(AlbumCover.prototype, '_setAlbumShadowColor');
      jest.spyOn(AlbumCover.prototype, '_displayAlbumCover');

      await instance.onLoadImage({ target: instance.image.current });

      await sleep(200);

      expect(AlbumCover.prototype._hideLoader).toBeCalled();
      expect(AlbumCover.prototype._setAlbumShadowColor).toBeCalled();
      expect(AlbumCover.prototype._displayAlbumCover).toBeCalled();
    });
  });

  describe('componentDidUpdate', () => {
    it('calls _displayLoadingCover', async () => {
      AlbumCover.prototype._displayLoadingCover = jest.fn();

      const component = mount(<AlbumCover src="/john-doe.jpg" alt="John Doe alt." />);

      component.setProps({ src: 'new-john-doe.jpg' });

      await sleep(100);

      expect(AlbumCover.prototype._displayLoadingCover).toBeCalled();
    });
  });
});
