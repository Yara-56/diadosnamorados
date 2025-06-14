import React, { useEffect, useState } from 'react';
import './FinalGift.css';

export default function FinalGift() {
  const [index, setIndex] = useState(11);
  const [fade, setFade] = useState(true);
  const imageList = [...Array.from({ length: 12 }, (_, i) => i + 11), 1];

  const startDate = new Date(2022, 11, 16); // 16/12/2022

  const [timeData, setTimeData] = useState(getTimeDiff());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeData(getTimeDiff());
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  function getTimeDiff() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months--;
    }
    if (months < 0) { months += 12; years--; }

    return { years, months, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => {
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
        <p>Miguel, cada segundo ao seu lado é o melhor presente da minha vida. 💕</p>
        <p>Obrigada por me fazer feliz todos os dias.</p>
        <p>Te amo infinitamente!</p>
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
