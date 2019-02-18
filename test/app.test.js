import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
  it('works', () => {
    const wrap = shallow(
      <App />,
    );
    expect(wrap.text()).toEqual('<ArtistImage /><ElapsedTime /><SongInfo /><PlayButton />');
  });
  it('Renders according to snapshot', () => {
    const app = shallow(<App />);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode', () => {
    const debug = shallow(<App debug />);
  
    expect(toJson(debug)).toMatchSnapshot();
  });
  it('should mount correctly', () => {
    const wrap = mount(<App />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const wrap = render(<App />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});
