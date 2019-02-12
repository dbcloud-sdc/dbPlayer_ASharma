import React from 'react';

const SongInfo = (props) => {
  return (
    <div className="Info-Container">
      <div className="Artist-Name">
        {props.song.artistname}
      </div>
      <span className="Song-Name">
        {props.song.songname}
      </span>
    </div>
  );
};

export default SongInfo;
