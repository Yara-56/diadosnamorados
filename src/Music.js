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

  let url = null;
  let loop = false;
  let playerVars = { autoplay: 1 };

  if (playIntro) {
    url = "https://www.youtube.com/watch?v=9M5a24g4OVg";
    loop = true;
  } else if (playRefrain) {
    url = "https://www.youtube.com/watch?v=5uhR5PhDRWM";
    loop = false;
    playerVars.start = 40;
  }

  if (!url) return null; // Não renderiza nada se nenhum for verdadeiro

  return (
    <div style={playerStyle}>
      <ReactPlayer
        url={url}
        playing
        loop={loop}
        muted={isMuted}
        volume={1}
        controls={false}
        onReady={handleReady}
        config={{
          youtube: { playerVars }
        }}
      />
    </div>
  );
}
