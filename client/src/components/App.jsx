import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faToggleOff, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import ArtistImage from './ArtistImage';
import PlayButton from './PlayButton';
import SongInfo from './SongInfo';
import ElapsedTime from './ElapsedTime';
import SoundBar from './SoundBar';
import ajax from '../../lib/ajax';

library.add(faPlayCircle);
library.add(faPauseCircle);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      songs: [],
      playStatus: false,
    };
    this.handlePlayButton = this.handlePlayButton.bind(this);
  }

  componentDidMount() {
    this.getImage();
    this.getSongs();
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

  getSongs() {
    ajax.getAllSongs((err, data) => {
      if (err) {
        console.log('getSongs Failed', err);
      } else {
        const randomIndex = Math.floor(Math.random() * 100);
        this.setState({
          songs: data[randomIndex],
        });
      }
    });
  }

  handlePlayButton() {
    this.setState({
      playStatus: !this.state.playStatus,
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <ArtistImage img={this.state.image} />
          <ElapsedTime info={this.state.songs} />
          <SongInfo song={this.state.songs} />
          <PlayButton onToggle={this.handlePlayButton} play={this.state.playStatus} />
          {
            this.state.songs.decibel && this.state.songs.songlength
            && (
            <div className="soundbar">
              <SoundBar sound={this.state.songs} play={this.state.playStatus} />
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
