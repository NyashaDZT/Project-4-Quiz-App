
import { useState } from 'react';

export default function SingleQuizView({ quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    // Implement logic to handle answer submission
    // You may want to check if an answer is selected and update the state accordingly
    // You can also navigate to the next question after submitting an answer
    // Update the state or navigate to the next question based on your logic
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
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
          <button onClick={handleAnswerSubmit}>Next Question</button>
        </div>
      )}
    </div>
  );
}