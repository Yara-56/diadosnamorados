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
  const [isMuted, setIsMuted] = useState(true); // controlado globalmente

  const handleStart = () => {
    setIsMuted(false); // desmuta no clique (Safari friendly)
    setPlayIntro(true);
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
    setPlayIntro(false);
    setPlayRefrain(true);
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

      <Music playIntro={playIntro} playRefrain={playRefrain} isMuted={isMuted} />
    </div>
  );
}
