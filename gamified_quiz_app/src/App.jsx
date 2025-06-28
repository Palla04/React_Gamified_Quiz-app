import { useState } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <div className="container my-4">
      {step === 1 && <Welcome startQuiz={() => setStep(2)} />}
      {step === 2 && <Quiz finishQuiz={(finalScore) => { setScore(finalScore); setStep(3); }} />}
      {step === 3 && <Result score={score} restart={() => setStep(1)} />}
    </div>
  );
}

export default App;
