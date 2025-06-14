import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export default function Music({ playIntro = false, playRefrain = false }) {
  const [isMuted, setIsMuted] = useState(true);

  const handleReady = () => {
    setTimeout(() => setIsMuted(false), 500);
  };

  const playerStyle = {
    position: 'absolute',
    top: '-1000px',
    left: '-1000px',
    width: '400px',
    height: '300px',
  };

  return (
    <div style={playerStyle}>
      {playIntro && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=9M5a24g4OVg"
          playing
          loop
          muted={isMuted}
          volume={1}
          controls={false}
          onReady={handleReady}
          config={{
            youtube: { playerVars: { autoplay: 1 } }
          }}
        />
      )}

      {playRefrain && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5uhR5PhDRWM"
          playing
          muted={isMuted}
          volume={1}
          controls={false}
          onReady={handleReady}
          config={{
            youtube: { playerVars: { autoplay: 1, start: 40 } }
          }}
        />
      )}
    </div>
  );
}
