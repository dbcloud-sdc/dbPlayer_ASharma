import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import ArtistImage from '../client/src/components/ArtistImage';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('ArtistImage Component', () => {
  it('should render correctly according to snapshot', () => {
    const props = {
      imgurl: 'https://s3-us-west-1.amazonaws.com/songimages/photos/simg90.jpg',
    };
    const artistimage = shallow(<ArtistImage img={props.imgurl} />);
    expect(toJson(artistimage)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const props = {
      imgurl: 'https://s3-us-west-1.amazonaws.com/songimages/photos/simg90.jpg',
    };
    const debug = shallow(<ArtistImage img={props.imgurl} debug />);
  
    expect(toJson(debug)).toMatchSnapshot();
  });
});
