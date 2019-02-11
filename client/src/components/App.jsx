import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faToggleOff, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import ArtistImage from './ArtistImage';
import PlayButton from './PlayButton';
import SongInfo from './SongInfo';
import ajax from '../../lib/ajax';

library.add(faPlayCircle);
library.add(faPauseCircle);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    ajax.getAllImages((err, data) => {
      if (err) {
        console.log('getImage failed', err);
      } else {
        const randomIndex = Math.floor(Math.random() * 100);
        this.setState({
          image: data[randomIndex],
        });
      }
    });
  }


  render() {
    return (
      <div className="container">
        <ArtistImage img={this.state.image} />
        <SongInfo />
        <PlayButton />
      </div>
    );
  }
}

export default App;
