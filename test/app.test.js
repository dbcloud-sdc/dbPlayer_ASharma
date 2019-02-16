import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import ArtistImage from '../client/src/components/ArtistImage';
import Comment from '../client/src/components/Comment';
import ElapsedTime from '../client/src/components/ElapsedTime';
import SongInfo from '../client/src/components/SongInfo';
import SoundBar from '../client/src/components/SoundBar';
import PlayButton from '../client/src/components/PlayButton';

configure({ adapter: new Adapter() });

// testing first test


describe('App Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
  it('works', () => {
    const wrap = shallow(
      <App />
    );
    expect(wrap.text()).toEqual('<ArtistImage /><PlayButton />');
  });
});

// testing play button

describe('Play Button Component', () => {
  it('simulates button click for play-button', () => {
    const wrap = shallow(
      <PlayButton />
    );
    wrap.find('div').simulate('click');
  });
  it('should render App without throwing an error', () => {
    expect(shallow(<PlayButton />).exists()).toBe(true);
  });
});

describe('ArtistImage Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<ArtistImage />).exists()).toBe(true);
  });
});

describe('Comment Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<Comment />).exists()).toBe(true);
  });
});

  describe('ElapsedTime Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<ElapsedTime />).exists()).toBe(true);
  });
});

  describe('PlayButton Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<PlayButton />).exists()).toBe(true);
  });
});

  describe('SongInfo Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<SongInfo />).exists()).toBe(true);
  });
});

  describe('SoundBar Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<SoundBar />).exists()).toBe(true);
  });
});
