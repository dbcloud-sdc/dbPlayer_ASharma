import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import SoundBar from '../client/src/components/SoundBar';

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
    expect(app).toMatchSnapshot();
  });
});


//   describe('SoundBar Component', () => {
//   it('should render App without throwing an error', () => {
//     expect(shallow(<SoundBar />).exists()).toBe(true);
//   });
// });
