import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { activeUser } from '../utils/helpers/common';
import { useActionData } from 'react-router';

export default function QuizCreate() {
  const res = useActionData
  const user = activeUser()
  const [quizData, setQuizData] = useState({
    name: '',
    description: '',
    questionsCount: 1, // Default to one question
    questions: [{ text: '', answers: [{ text: '', correct: false }] }],
    owner: user ? user.id : null,
  })

  const handleInputChange = (field, value) => {
    setQuizData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }

  const handleQuestionChange = (index, value) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions]
      updatedQuestions[index].text = value
      return {
        ...prevData,
        questions: updatedQuestions,
      }
    })
  }

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions]
      updatedQuestions[questionIndex].answers[answerIndex].text = value;
      return {
        ...prevData,
        questions: updatedQuestions,
      }
    })
  }

  const handleCorrectAnswerChange = (questionIndex, answerIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions]
      updatedQuestions[questionIndex].answers.forEach((answer, idx) => {
        answer.correct = idx === answerIndex
      });
      return {
        ...prevData,
        questions: updatedQuestions,
      }
    })
  }

  const handleAddQuestion = () => {
    if (quizData.questionsCount < 10) {
      setQuizData((prevData) => ({
        ...prevData,
        questionsCount: prevData.questionsCount + 1,
        questions: [...prevData.questions, { text: '', answers: [{ text: '', correct: false }] }],
      }))
    }
  }

  const handleAddAnswer = (questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].answers.push({ text: '', correct: false });
      return {
        ...prevData,
        questions: updatedQuestions,
      }
    })
  }

  const handleCreateQuiz = () => {
  
  }

  return (
    <Container>
      <h1>Create a Quiz</h1>
      <Form method="POST">
        <Form.Group controlId="quizName">
          <Form.Label>Quiz Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter quiz name"
            value={quizData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="quizDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter quiz description"
            value={quizData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </Form.Group>
  
        {[...Array(quizData.questionsCount)].map((_, questionIndex) => (
          <div key={questionIndex}>
            <Form.Group controlId={`question-${questionIndex}`}>
              <Form.Label>{`Question ${questionIndex + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter question ${questionIndex + 1}`}
                value={quizData.questions[questionIndex].text}
                onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
              />
            </Form.Group>
  
            {[...Array(quizData.questions[questionIndex].answers.length)].map((_, answerIndex) => (
              <Form.Group key={answerIndex} controlId={`answer-${questionIndex}-${answerIndex}`}>
                <Form.Check
                  type="checkbox"
                  label={`Answer ${answerIndex + 1}`}
                  checked={quizData.questions[questionIndex].answers[answerIndex].correct}
                  onChange={() => handleCorrectAnswerChange(questionIndex, answerIndex)}
                />
                <Form.Control
                  type="text"
                  placeholder={`Enter answer ${answerIndex + 1}`}
                  value={quizData.questions[questionIndex].answers[answerIndex].text}
                  onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)}
                />
              </Form.Group>
            ))}
  
            <Button variant="info" onClick={() => handleAddAnswer(questionIndex)}>
              Add Answer
            </Button>
          </div>
        ))}
  
        <Button variant="primary" onClick={handleAddQuestion}>
          Add Question
        </Button>
  
        <Button variant="success" onClick={handleCreateQuiz} type="submit">
          Create Quiz
        </Button>
      </Form>
    </Container>
  )
}