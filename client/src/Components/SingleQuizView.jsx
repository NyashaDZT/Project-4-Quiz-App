
import { useState, useRef } from 'react';
import { useActionData, useLoaderData } from 'react-router';
import { activeUser } from '../utils/helpers/common';

export default function SingleQuizView() {

  const userId = activeUser()
  const res = useActionData()
  const quiz = useLoaderData()
  const quizId = quiz.id

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const isLastQuestion = currentQuestionIndex === quiz.questions.length -1
  const currentQuestion = quiz.questions[currentQuestionIndex]

  const formRef = useRef(null)

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedAnswer;
      return newAnswers;
    })
  }

  const createResult = (userId, quizId, user_score) => {
    const data = {
      user: userId,
      quiz: quizId,
      score: user_score,
    }
    console.log(data);
    // Perform any additional logic for result creation or API submission
  }


  const calculateScore = () => {
    let user_score = 0;
    quiz.questions.forEach((question, index) => {
        const selectedAnswer = selectedAnswers[index];
        const correctAnswer = question.answers.find((answer) => answer.correct)

        if (selectedAnswer && selectedAnswer === correctAnswer) {
            user_score++;
            console.log(correctAnswer)
        }
    });
    console.log('Score:', user_score);
    return createResult(userId, quizId, user_score)
  }

  



  const handleButtonClick = () => {
    if (isLastQuestion) {
      calculateScore()
      // Submit the form programmatically
      formRef.current.submit();
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const buttonLabel = isLastQuestion ? 'Submit' : 'Next Question';



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
                  onChange={() => handleAnswerSelect(answer)}
                />
                <label htmlFor={answer.text}>{answer.text}</label>
              </div>
            ))}
          </form>
          <button onClick={handleButtonClick}>
            {isLastQuestion ? 'Submit' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  )
}