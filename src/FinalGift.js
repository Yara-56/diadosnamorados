import React, { useEffect, useState } from 'react';
import './FinalGift.css';

export default function FinalGift() {
  const [index, setIndex] = useState(11);
  const [fade, setFade] = useState(true);
  const imageList = [...Array.from({ length: 12 }, (_, i) => i + 11), 1];

  // DATA DE INÍCIO DO RELACIONAMENTO:
  const startDate = new Date(2022, 11, 16); // 16/12/2022 (lembre-se: mês 11 = Dezembro, pois em JS o mês começa em 0)

  const [timeData, setTimeData] = useState(getTimeDiff());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeData(getTimeDiff());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function getTimeDiff() {
    const now = new Date();
    let diff = now - startDate;

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let years = Math.floor(days / 365);
    days = days % 365;

    let months = Math.floor(days / 30);
    days = days % 30;

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    return { years, months, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => {
          const currentIndex = imageList.indexOf(prev);
          const nextIndex = currentIndex + 1;
          return imageList[nextIndex] || imageList[0];
        });
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="final-container">
      <h2 className="title">💖 Nossos Momentos 💖</h2>

      <div className="photo-frame">
        <img
          src={`/images/memoria/${index}.jpeg`}
          alt="Nosso momento"
          className={`slideshow-image ${fade ? 'fade-in' : 'fade-out'}`}
        />
      </div>

      <div className="message">
        <p>
          Miguel, cada segundo ao seu lado é o melhor presente da minha vida. 💕
        </p>
        <p>
          Obrigada por me fazer feliz todos os dias.
        </p>
        <p>
          Te amo infinitamente!
        </p>
      </div>

      <div className="timer">
        <p>Estamos juntos há:</p>
        <div className="time-boxes">
          <div><strong>{timeData.years}</strong> Anos</div>
          <div><strong>{timeData.months}</strong> Meses</div>
          <div><strong>{timeData.days}</strong> Dias</div>
          <div><strong>{timeData.hours}</strong> Horas</div>
          <div><strong>{timeData.minutes}</strong> Minutos</div>
          <div><strong>{timeData.seconds}</strong> Segundos</div>
        </div>
      </div>
    </div>
  );
}
