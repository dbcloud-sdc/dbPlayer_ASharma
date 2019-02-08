import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayButton = props => (
  <div className="btnContainer">
    <FontAwesomeIcon style={{height: '60px', width: '60px'}} className="playBtn" icon="play-circle" />
  </div>
);


export default PlayButton;
