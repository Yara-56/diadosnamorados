import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

export default function MemoryGame({ onComplete }) {
  const totalPairs = 10;
  const cards = Array.from({ length: totalPairs }, (_, i) => i + 1);
  const [shuffled] = useState(() => shuffle([...cards, ...cards]));

  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const debugMode = true; 

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleFlip(index) {
    if (flipped.length === 2 || flipped.includes(index)) return;
    setFlipped([...flipped, index]);
  }

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (shuffled[first] === shuffled[second]) {
        if (!matched.includes(shuffled[first])) {
          setMatched(prev => [...prev, shuffled[first]]);
        }
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped, shuffled, matched]);

  return (
    <div className="memory-container">

      <div className="grid">
        {shuffled.map((num, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) || matched.includes(num) ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className="front">
              <img src={`/images/memoria/${num}.jpeg`} alt={`Foto ${num}`} />
            </div>
            <div className="back">❓</div>
          </div>
        ))}
      </div>

      {matched.length === totalPairs && (
        <div className="completed">
          <h3>Parabéns! Você encontrou todos os pares 🎉</h3>
          <button onClick={onComplete}>Continuar 💞</button>
        </div>
      )}

      {debugMode && (
        <div className="skip-section">
          <button onClick={onComplete} className="skip-button">
            ⚙️ Pular (modo dev)
          </button>
        </div>
      )}
    </div>
  );
}
