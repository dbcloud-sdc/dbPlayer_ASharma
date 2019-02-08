import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayButton = (props) => {
  const [playPause, toggle] = useState(false);
  return (
    <div className="btnContainer">
      {!playPause ? <FontAwesomeIcon onClick={() => toggle(!playPause)} style={{ height: '60px', width: '60px' }} className="playBtn" icon="play-circle" />
        : <FontAwesomeIcon onClick={() => toggle(!playPause)} style={{ height: '60px', width: '60px' }} className="playBtn" icon="pause-circle" />
    }
    </div>
  );
};


export default PlayButton;
