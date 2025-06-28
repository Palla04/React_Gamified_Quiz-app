import { Button } from 'react-bootstrap';

export default function Welcome({ startQuiz }) {
  return (
    <div className="text-center">
      <h1 className="display-4">Gamified Quiz LMS</h1>
      <p>Test your knowledge and earn points!</p>
      <Button variant="primary" onClick={startQuiz}>Start Quiz</Button>
    </div>
  );
}
