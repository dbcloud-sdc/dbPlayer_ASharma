import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import ArtistImage from '../client/src/components/ArtistImage';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('ArtistImage Component', () => {
  const props = {
    imgurl: 'https://s3-us-west-1.amazonaws.com/songimages/photos/simg90.jpg',
  };

  it('should render correctly according to snapshot', () => {
    const artistimage = shallow(<ArtistImage img={props.imgurl} />);
    expect(toJson(artistimage)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const debug = shallow(<ArtistImage img={props.imgurl} debug />);
    expect(toJson(debug)).toMatchSnapshot();
  });
  it('should mount correctly', () => {
    const artistimage = mount(<ArtistImage img={props.imgurl} />);
    expect(toJson(artistimage)).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const artistimage = render(<ArtistImage img={props.imgurl} />);
    expect(toJson(artistimage)).toMatchSnapshot();
  });
});
