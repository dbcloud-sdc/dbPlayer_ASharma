import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import Comment from '../client/src/components/Comment';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Comment Component', () => {
  const props = {
    imgurl: 'https://s3-us-west-1.amazonaws.com/songimages/photos/simg100.jpg',
    username: 'Annabelle Parker',
    comment: 'Nihil rerum possimus suscipit architecto non consequuntur provident adipisci.',
  };
  // it('should render Comment without throwing an error', () => {
  //   const songcomment = shallow(<Comment random={props.imgurl} info={props.comment} name={props.username} />);
  //   expect(toJson(songcomment)).toMatchSnapshot();
  // });
  // it('should render correctly in "debug" mode', () => {
  //   const debug = shallow(<Comment random={props.imgurl} info={props.comment} name={props.username} debug />);
  //   expect(toJson(debug)).toMatchSnapshot();
  // });
  it('should mount correctly', () => {
    const songcomment = mount(<Comment random={props.imgurl} info={props.comment} name={props.username} />);
    expect(toJson(songcomment)).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const songcomment = render(<Comment random={props.imgurl} info={props.comment} name={props.username} />);
    expect(toJson(songcomment)).toMatchSnapshot();
  });
});
