import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import Comment from '../client/src/components/Comment';
import ElapsedTime from '../client/src/components/ElapsedTime';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('ElapsedTime Component', () => {
  const props = {
    timelapsed: '2018-04-07 00:38:13',
    hashtag: 'SCSI',
  }
  it('should render ElapsedTime without throwing an error', () => {
    const elapsedtime = shallow(<ElapsedTime info={props.timelapsed} />);
    expect(toJson(elapsedtime)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const debug = shallow(<ElapsedTime info={props.timelapsed} debug />);
    expect(toJson(debug)).toMatchSnapshot();
  });
  it('should mount correctly', () => {
    const elapsedtime = mount(<ElapsedTime info={props.timelapsed} />);
    expect(toJson(elapsedtime)).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const elapsedtime = render(<ElapsedTime info={props.timelapsed} />);
    expect(toJson(elapsedtime)).toMatchSnapshot();
  });
});
