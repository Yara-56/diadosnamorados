import React, { useState } from 'react';
import Home from './Home';
import Introduction from './Introduction';
import Quiz from './Quiz';
import Challenge from './Challenge';
import MemoryGame from './MemoryGame';
import FinalGift from './FinalGift';

export default function App() {
  const [step, setStep] = useState("home");

  const handleStart = () => {
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
    </div>
  );
}
