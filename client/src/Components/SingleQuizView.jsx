import { useState, useRef } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import axios from 'axios';
import { activeUser, getToken } from '../utils/helpers/common';

export default function SingleQuizView() {
  const userId = activeUser()
  const navigate = useNavigate()
  const quiz = useLoaderData()
  const quizId = quiz.id

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const formRef = useRef(null)

  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1
  const currentQuestion = quiz.questions[currentQuestionIndex]

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers]
      newAnswers[currentQuestionIndex] = selectedAnswer
      return newAnswers
    });
  };

  const calculateScore = () => {
    let user_score = 0;
    quiz.questions.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const correctAnswer = question.answers.find((answer) => answer.correct);

      if (selectedAnswer && selectedAnswer === correctAnswer) {
        user_score++;
      }
    })
    console.log('Score:', user_score);
    return user_score
  }

  const handleButtonClick = async () => {
    if (isLastQuestion) {
      const userScore = calculateScore();
      const resultData = {
        user: userId,
        quiz: quizId,
        score: userScore,
      }
      console.log(resultData)
      try {
        const response = await axios.post('/api/results/', resultData, {
          validateStatus: () => true,
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })

        if (response.status === 201) {
          console.log('Result submitted successfully:', response.data)
          navigate(`/profile/${userId}`)
        } else {
          console.error('Failed to submit result:', response.statusText)
        }
      } catch (error) {
        console.error('Error submitting result:', error)
      }
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '24px' }}>{quiz.name}</h1>
      {currentQuestion && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ fontSize: '20px' }}>{currentQuestion.text}</h2>
          <form ref={formRef}>
            {currentQuestion.answers.map((answer) => (
              <div key={answer.text} style={{ margin: '10px 0' }}>
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
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              fontSize: '18px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={handleButtonClick}
          >
            {isLastQuestion ? 'Submit' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  )
}