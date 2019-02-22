import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayButton = (props) => {
  const player = document.getElementById('fredness');
  const controller = () => {
    player.paused ? player.play() : player.pause();
  };
  return (
    <div className="btnContainer">
      {!props.play ? <FontAwesomeIcon onClick={() => { props.onToggle(); controller(); }} style={{ height: '60px', width: '60px' }} className="playBtn" icon="play-circle" />
        : <FontAwesomeIcon onClick={() => { props.onToggle(); controller(); }} style={{ height: '60px', width: '60px' }} className="playBtn" icon="pause-circle" />
    }
      {props.songUrl.songurl &&
        <audio controls style={{ display: 'none'} } id='fredness' name="media">
          <source id='songsrc' src={props.songUrl.songurl} type="audio/mp3" />
        </audio>
    }
    </div>
  );
};


export default PlayButton;
