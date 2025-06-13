import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function Music() {
  return (
    <div style={{ display: 'none' }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=5uhR5PhDRWM"
        playing
        loop
        volume={0.4}
        controls={false}
        config={{
          youtube: {
            playerVars: { autoplay: 1, mute: 0 }
          }
        }}
      />
    </div>
  );
}
