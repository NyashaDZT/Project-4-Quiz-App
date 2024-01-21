
import { useState } from 'react';
import { useActionData, useLoaderData } from 'react-router';
import { activeUser } from '../utils/helpers/common';

export default function SingleQuizView() {

  const user = activeUser()
  const res = useActionData
  const quiz = useLoaderData()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const isLastQuestion = currentQuestionIndex === quiz.questions.length -1
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
        const selectedAnswer = selectedAnswers[index];
        const correctAnswer = question.answers.find((answer) => answer.correct);

        if (selectedAnswer && selectedAnswer === correctAnswer) {
            score++;
        }
    });

    console.log('Score:', score);
  };

  const handleAnswerSubmit = () => {
    // Implement logic to handle answer submission
    // You may want to check if an answer is selected and update the state accordingly
    // You can also navigate to the next question or submit the quiz based on your logic
    // Update the state or navigate based on your requirements
    if (isLastQuestion) {
      // Submit quiz logic
      calculateScore()
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      
    }
  };


  return (
    <div>
      <h1>{quiz.name}</h1>
      {currentQuestion && (
        <div>
          <h2>{currentQuestion.text}</h2>
          <form>
            {currentQuestion.answers.map((answer) => (
              <div key={answer.text}>
                <input
                  type="checkbox"
                  id={answer.text}
                  name={answer.text}
                  // Add any necessary state or event handlers for answer selection
                />
                <label htmlFor={answer.text}>{answer.text}</label>
              </div>
            ))}
          </form>
          <button onClick={handleAnswerSubmit}>
            {isLastQuestion ? 'Submit' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}