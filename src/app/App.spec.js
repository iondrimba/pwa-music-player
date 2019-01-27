import React from 'react';
import ReactDOM from 'react-dom';
import AudioHelper from '../helpers/audio';
import App from './App';

jest.mock('../helpers/audio');
jest.mock('../helpers/classlist');

describe('App', () => {
  beforeEach(() => {
    AudioHelper.mockClear();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
