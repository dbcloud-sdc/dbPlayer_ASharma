import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import ElapsedTime from '../client/src/components/ElapsedTime';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Comment Component', () => {
  it('should render Comment without throwing an error', () => {
    const props = {
      imgurl: 'https://s3-us-west-1.amazonaws.com/songimages/photos/simg100.jpg',
      username: 'Annabelle Parker',
      comment: 'Nihil rerum possimus suscipit architecto non consequuntur provident adipisci.',
    };
    const songcomment = shallow(<new Comment random={props.imgurl} info={props.comment} name={props.username} />);
    expect(toJson(songcomment)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const props = {
      imgurl: 'https://s3-us-west-1.amazonaws.com/songimages/photos/simg100.jpg',
      username: 'Annabelle Parker',
      comment: 'Nihil rerum possimus suscipit architecto non consequuntur provident adipisci.',
    };
    const debug = shallow(<new Comment random={props.imgurl} info={props.comment} name={props.username} debug />);
  
    expect(toJson(debug)).toMatchSnapshot();
  });
});
