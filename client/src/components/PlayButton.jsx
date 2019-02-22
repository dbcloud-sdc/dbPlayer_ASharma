import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayButton = (props) => {
  const controller = () => {
    const player = document.getElementById('fredness');
    if (player.paused) {
      player.load();
      player.play();
    } else {
      player.pause();
    }
  };
  return (
    <div className="btnContainer">
      {!props.play ? <FontAwesomeIcon onClick={() => { props.onToggle(); controller(); }} style={{ height: '60px', width: '60px' }} className="playBtn" icon="play-circle" />
        : <FontAwesomeIcon onClick={() => { props.onToggle(); controller(); }} style={{ height: '60px', width: '60px' }} className="playBtn" icon="pause-circle" />
    }
      {
        <audio controls style={{ display: 'none'} } id='fredness' name="media">
          <source id='songsrc' src={props.songUrl.songurl} type="audio/mp3" />
        </audio>
    }
    </div>
  );
};


export default PlayButton;
