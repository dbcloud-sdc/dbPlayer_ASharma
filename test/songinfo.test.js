import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import SongInfo from '../client/src/components/SongInfo';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('SongInfo Component', () => {
  const props = {
    artistname: 'Etha Crona Sr.',
    songname: 'Qui blanditiis quas.',
  };
  it('should render SongInfo without throwing an error', () => {
    const song = shallow(<SongInfo song={props.artistname} />);
    expect(toJson(song)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const debug = shallow(<SongInfo song={props.artistname} debug />);
    expect(toJson(debug)).toMatchSnapshot();
  });
  it('should mount correctly', () => {
    const song = mount(<SongInfo song={props.artistname} />);
    expect(toJson(song)).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const song = render(<SongInfo song={props.artistname} />);
    expect(toJson(song)).toMatchSnapshot();
  });
});
