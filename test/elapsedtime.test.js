import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import Comment from '../client/src/components/Comment';
import ElapsedTime from '../client/src/components/ElapsedTime';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('ElapsedTime Component', () => {
  it('should render ElapsedTime without throwing an error', () => {
    const props = {
      timelapsed: '2018-04-07 00:38:13',
      hashtag: 'SCSI',
    }
    const elapsedtime = shallow(<ElapsedTime info={props.timelapsed} />);
    expect(toJson(elapsedtime)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const props = {
      timelapsed: '2018-04-07 00:38:13',
      hashtag: 'SCSI',
    }
    const debug = shallow(<ElapsedTime info={props.timelapsed} debug />);
  
    expect(toJson(debug)).toMatchSnapshot();
  });
});
