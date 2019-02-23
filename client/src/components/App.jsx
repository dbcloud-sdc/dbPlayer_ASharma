import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faToggleOff, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import ArtistImage from './ArtistImage';
import PlayButton from './PlayButton';
import SongInfo from './SongInfo';
import ElapsedTime from './ElapsedTime';
import SoundBar from './SoundBar';
import Comment from './Comment';
import ajax from '../../lib/ajax';

library.add(faPlayCircle);
library.add(faPauseCircle);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      songs: [],
      randomImage: [],
      randomComment: [],
      randomName: [],
      songsUrl: [],
      playStatus: false,
    };
    this.handlePlayButton = this.handlePlayButton.bind(this);
  }

  componentDidMount() {
    this.getImage();
    this.getSongs();
    this.getRandomImage();
    this.getRandomComment();
    this.getRandomName();
    this.getSongUrl();
  }

  getImage() {
    ajax.getAllImages((err, data) => {
      if (err) {
        console.log('getImage failed', err);
      } else {
        this.setState({
          image: data[0],
        });
      }
    });
  }

  getSongs() {
    ajax.getAllSongs((err, data) => {
      if (err) {
        console.log('getSongs Failed', err);
      } else {
        this.setState({
          songs: data[0],
        });
      }
    });
  }

  getSongUrl() {
    ajax.getAllSongsUrl((err, data) => {
      if (err) {
        console.log('getSongs Failed', err);
      } else {
        this.setState({
          songsUrl: data[0],
        });
      }
    });
  }

  getRandomImage() {
    ajax.getAllCommentImages((err, data) => {
      if (err) {
        console.log('getRandomImage failed', err);
      } else {
        const img = [];
        for (let i = 0; i < 80; i += 1) {
          const randomIndex = Math.floor(Math.random() * 100);
          img.push(data[randomIndex].commentimage);
        }
        this.setState({
          randomImage: img,
        });
      }
    });
  }

  getRandomComment() {
    ajax.getAllComments((err, data) => {
      if (err) {
        console.log('getRandomSongs Failed', err);
      } else {
        const comment = [];
        for (let i = 0; i < 80; i += 1) {
          const randomIndex = Math.floor(Math.random() * 100);
          comment.push(data[randomIndex].comment);
        }
        this.setState({
          randomComment: comment,
        });
      }
    });
  }

  getRandomName() {
    ajax.getAllComments((err, data) => {
      if (err) {
        console.log('getRandomSongs Failed', err);
      } else {
        const name = [];
        for (let i = 0; i < 80; i += 1) {
          const randomIndex = Math.floor(Math.random() * 100);
          name.push(data[randomIndex].username);
        }
        this.setState({
          randomName: name,
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
          <PlayButton onToggle={this.handlePlayButton} play={this.state.playStatus} songUrl={this.state.songsUrl} />
          {
            this.state.songs.decibel
            && this.state.songs.songlength
            && this.state.image.imgurl
            && this.state.randomImage
            && (
            <div>
              <div className="soundbar">
                <SoundBar
                  sound={this.state.songs}
                  play={this.state.playStatus}
                />
              </div>
              <div>
                <Comment
                  random={this.state.randomImage}
                  info={this.state.randomComment}
                  name={this.state.randomName}
                  play={this.state.playStatus}
                  song={this.state.songs}
                />
              </div>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
