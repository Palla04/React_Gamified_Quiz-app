import { useState, useEffect } from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import './Quiz.css'; // We'll add animation in CSS

const questions = [
  { question: 'React is a?', options: ['Framework', 'Library', 'Database'], answer: 'Library' },
  { question: 'What color is the sky?', options: ['Green', 'Blue', 'Yellow'], answer: 'Blue' },
  { question: 'CSS stands for?', options: ['Creative Style System', 'Cascading Style Sheets', 'Cool Sheet'], answer: 'Cascading Style Sheets' },
];

export default function Quiz({ finishQuiz }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
      return;
    }
    const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[current].answer;

    if (isCorrect) {
        setScore(score + 10);
        document.body.style.backgroundColor = '#d4edda';
        setEmoji({ symbol: "👏", message: "Great Job!" });
    } else {
        document.body.style.backgroundColor = '#f8d7da';
        setEmoji({ symbol: "😢", message: "Oops! Try Again" });
    }


    setTimeout(() => {
      document.body.style.backgroundColor = 'white';
      setEmoji("");
      nextQuestion();
    }, 1000);
  };

  const nextQuestion = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setTimeLeft(15);
    } else {
      finishQuiz(score);
    }
  };

  return (
    <div>

     <div className="emoji-box position-relative mb-3">
       {emoji && (
         <div className="emoji-animate text-center">
           <div className="big-emoji">{emoji.symbol}</div>
             <div className="emoji-message">{emoji.message}</div>
         </div>
        )}
     </div>


      <Card className="text-center">
        <Card.Body>
          <Card.Title>{questions[current].question}</Card.Title>
          <p className="text-danger">⏳ {timeLeft} sec left</p>
          {questions[current].options.map((opt, idx) => (
            <Button
                key={idx}
                size="sm"
                className="d-block my-2 w-100 option-btn"
                onClick={() => handleAnswer(opt)}
                variant="outline-primary"
            >
                {opt}
            </Button>
           ))}



        </Card.Body>
      </Card>
    </div>
  );
}
