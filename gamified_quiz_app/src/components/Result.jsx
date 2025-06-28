import { Button, Badge } from "react-bootstrap";

export default function Result({ score, restart }) {
  let badge;
  if (score >= 30) badge = <Badge bg="success">🏆 Quiz Master</Badge>;
  else if (score >= 20) badge = <Badge bg="warning">⚡ Fast Learner</Badge>;
  else badge = <Badge bg="danger">🤔 Keep Practicing</Badge>;

  return (
    <div className="text-center">
      <h2>Quiz Completed!</h2>
      <h4>Your Score: {score} Points 🎉</h4>
      <div className="my-3">{badge}</div>
      <Button variant="success" onClick={restart}>Play Again</Button>
    </div>
  );
}
