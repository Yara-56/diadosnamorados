import React, { useState, useEffect } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "Desde o dia 16/12/2022, Yasmin e Miguel embarcaram em uma jornada amorosa digna de roteiro de cinema. Sabendo que, a cada mês completo de namoro, é como se um novo capítulo fosse escrito, e que hoje é 11/06/2025, quantos capítulos mensais completos já foram vividos nesse relacionamento?",
    options: ["28", "29", "30", "31", "32"],
    answer: "30"
  },
  {
    question: "Durante a viagem a Porto Seguro, sob as estrelas e com um momento especial 🌿, foram feitos 10 pedidos: 4 sobre o casal, 3 sobre viagens e 3 sobre comida. Qual a probabilidade de um pedido NÃO ser sobre o casal?",
    options: ["30%", "40%", "50%", "60%", "70%"],
    answer: "60%"
  },
  {
    question: "No universo Interestelar Pancakes, cada 1h parece durar 4h de amor vivido. Foram 12 visitas de 2h cada. Qual o tempo emocional total?",
    options: ["48 horas", "72 horas", "96 horas", "100 horas", "108 horas"],
    answer: "96 horas"
  },
  {
    question: "Revivendo momentos: 3 datas marcantes, 2 pratos favoritos e 2 filmes. Quantas combinações de 'noite perfeita' são possíveis?",
    options: ["6", "8", "10", "12", "14"],
    answer: "12"
  },
  {
    question: "Durante a viagem, visitaram 5 praias, provaram 3 tapiocas e fizeram 2 passeios de banana. Se cada experiência gerou 4 fotos, quantas fotos foram tiradas?",
    options: ["40 fotos", "42 fotos", "44 fotos", "46 fotos", "48 fotos"],
    answer: "42 fotos"
  },
  {
    question: "Considerando que cada letra dos nomes 'Yasmin' e 'Miguel' representa um mês de felicidade, multiplicado pelos anos de namoro até 11/06/2025, quantos meses de felicidade acumulados já foram somados?",
    options: ["20 meses", "22 meses", "24 meses", "26 meses", "28 meses"],
    answer: "24 meses"
  },
  {
    question: "Se cada beijo representasse 5 min de felicidade, e já foram 500 beijos, qual o total de tempo de felicidade?",
    options: ["30 horas", "35 horas", "40 horas", "41 horas e 40 minutos", "50 horas"],
    answer: "41 horas e 40 minutos"
  },
  {
    question: "Cada viagem rendeu 120 lembranças. Foram 4 viagens. Quantas lembranças já criaram juntos?",
    options: ["400", "420", "440", "460", "480"],
    answer: "480"
  },
  {
    question: "Cada jantar romântico dura 2h30. Foram 20 jantares. Qual o tempo total?",
    options: ["45 horas", "48 horas", "50 horas", "52 horas", "55 horas"],
    answer: "50 horas"
  },
  {
    question: "Se a cada mês de namoro uma carta de amor fosse escrita, quantas cartas teriam sido trocadas desde o início do namoro?",
    options: ["28", "29", "30", "31", "32"],
    answer: "30"
  },
  {
    question: "Qual foi a bebida que Yasmin e Miguel tomaram no primeiro date?",
    options: ["Água", "Vinho", "Ousadia", "Vodka"],
    answer: "Ousadia"
  },
  {
    question: "Qual foi a data do nosso primeiro beijo?",
    options: ["14 de janeiro", "15 de janeiro", "16 de janeiro", "17 de janeiro", "18 de janeiro"],
    answer: "16 de janeiro"
  }
];

export default function Quiz({ onComplete }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = (option) => {
    if (selected) return;
    setSelected(option);
    setIsCorrect(option === questions[current].answer);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
        setIsCorrect(null);
      } else {
        onComplete();
      }
    }, 1500);
  };

  return (
    <div className="quiz-container">
      <h2 className="fade-in-up">{questions[current].question}</h2>
      <div className="options-container">
        {questions[current].options.map((option, index) => {
          let className = '';
          if (selected) {
            if (option === questions[current].answer) className = 'correct';
            else if (option === selected) className = 'wrong';
          }

          return (
            <button 
              key={index}
              className={className}
              onClick={() => handleSelect(option)}
              disabled={!!selected}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
