import React from "react";
import "./Challenge.css";

export default function Challenge({ onComplete }) {
  return (
    <div className="challenge-container">
      <h2 className="fade-in-up">
        Achou que tinha acabado? Agora vem o Jogo da Memória!
      </h2>
      <button className="start-memory-button" onClick={onComplete}>
        Começar desafio
      </button>
    </div>
  );
}
