import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayButton = props => (
  <div className="btnContainer">
    {!props.play ? <FontAwesomeIcon onClick={props.onToggle} style={{ height: '60px', width: '60px' }} className="playBtn" icon="play-circle" />
      : <FontAwesomeIcon onClick={props.onToggle} style={{ height: '60px', width: '60px' }} className="playBtn" icon="pause-circle" />
    }
  </div>
);


export default PlayButton;
