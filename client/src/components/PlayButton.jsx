import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayButton = (props) => {
  const controller = () => {
    const player = document.getElementById('fredness');
    player.paused ? player.play() : player.pause();
  };
  return (
    <div className="btnContainer">
      {!props.play ? <FontAwesomeIcon onClick={() => { props.onToggle(); controller(); }} style={{ height: '60px', width: '60px' }} className="playBtn" icon="play-circle" />
        : <FontAwesomeIcon onClick={() => { props.onToggle(); controller(); }} style={{ height: '60px', width: '60px' }} className="playBtn" icon="pause-circle" />
    }
      {
        <video style={{ display: 'none'} } id='fredness' name="media">
          <source src="https://s3.amazonaws.com/fredssong/FredsSong.mp3" type="audio/mp3" />
        </video>
    }
    </div>
  );
};


export default PlayButton;
