import React from 'react';
import './Home.css';

export default function Home({ onStart }) {
  return (
    <div className="home-container">
      <h1>💖 Miguel 💖</h1>
      <p>Preparei algo especial pra você...</p>
      <button onClick={onStart}>Abrir Presente 🎁</button>

      <div className="hearts">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="heart" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}>
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}
