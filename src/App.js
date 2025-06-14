import React, { useState } from 'react';
import Home from './Home';
import Introduction from './Introduction';
import Quiz from './Quiz';
import Challenge from './Challenge';
import MemoryGame from './MemoryGame';
import FinalGift from './FinalGift';
import Music from './Music';

export default function App() {
  const [step, setStep] = useState("home");
  const [playIntro, setPlayIntro] = useState(false);
  const [playRefrain, setPlayRefrain] = useState(false);

  const handleStart = () => {
    setPlayIntro(true);  // Toca a primeira música só quando clica no presente
    setStep("introduction");
  };

  const handleIntroductionComplete = () => {
    setStep("quiz");
  };

  const handleQuizComplete = () => {
    setStep("challenge");
  };

  const handleChallengeComplete = () => {
    setStep("memory");
  };

  const handleMemoryComplete = () => {
    setPlayIntro(false);  // Para a música 1
    setPlayRefrain(true); // Inicia a música 2 no final
    setStep("finalGift");
  };

  return (
    <div>
      {step === "home" && <Home onStart={handleStart} />}
      {step === "introduction" && <Introduction onComplete={handleIntroductionComplete} />}
      {step === "quiz" && <Quiz onComplete={handleQuizComplete} />}
      {step === "challenge" && <Challenge onComplete={handleChallengeComplete} />}
      {step === "memory" && <MemoryGame onComplete={handleMemoryComplete} />}
      {step === "finalGift" && <FinalGift />}
      
      <Music playIntro={playIntro} playRefrain={playRefrain} />
    </div>
  );
}
