import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import PlayButton from '../client/src/components/PlayButton';

configure({ adapter: new Adapter() });

// testing first test

it('works', () => {
  const wrap = shallow(
    <App />
  );
  expect(wrap.text()).toEqual('<ArtistImage /><PlayButton />');
});


// testing play button

describe('Play Button Component', () => {
  it('simulates button click for play-button', () => {
    const wrap = shallow(
      <PlayButton />
    );
    wrap.find('div').simulate('click');
  });
});