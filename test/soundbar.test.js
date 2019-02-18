import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SoundBar from '../client/src/components/SoundBar';

configure({ adapter: new Adapter() });

describe('SoundBar Component', () => {

  const props = {
    songlength: 281,
    decibel: 69,
  };
  it('should render App without throwing an error', () => {
    const songsound = shallow(<SoundBar sound={props.songlength} />)
    expect(toJson(songsound)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const debug = shallow(<SoundBar sound={props.songlength} debug />);
  
    expect(debug).toMatchSnapshot();
  });
});
