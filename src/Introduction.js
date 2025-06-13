import React, { useState, useEffect } from 'react';
import './Introduction.css';

export default function Introduction({ onComplete }) {
  const messages = [
    "Oi Miguel 💖",
    "Tenho uma surpresa feita só pra você...",
    "Mas antes, quero te desafiar um pouquinho 😉",
    "Preparei perguntas sobre nós, nossas aventuras... e alguns desafios extras 🧠💖"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current < messages.length - 1) {
      const timer = setTimeout(() => setCurrent(current + 1), 2200);
      return () => clearTimeout(timer);
    }
  }, [current]);

  return (
    <div className="introduction-container">
      <h2 className="fade-in-up">{messages[current]}</h2>
      {current === messages.length - 1 && (
        <button className="start-quiz-button" onClick={onComplete}>
          Começar Quiz 💞
        </button>
      )}
    </div>
  );
}
