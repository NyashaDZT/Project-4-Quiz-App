import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { activeUser, getToken } from '../utils/helpers/common';
import { useLoaderData, useNavigate } from 'react-router';
import axios from 'axios';

export default function QuizEditOrDelete() {
  const quiz = useLoaderData()
  const navigate = useNavigate()
  const user = activeUser()
  const [errorMsg, setErrorMsg] = useState(null)

  const [quizData, setQuizData] = useState({
    name: '',
    description: '',
    topic: '',
    difficulty: 'easy',
    number_of_questions: 1,
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
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[index].text = value;
      return {
        ...prevData,
        questions: updatedQuestions,
      }
    })
  }

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].answers[answerIndex].text = value;
      return {
        ...prevData,
        questions: updatedQuestions,
      }
    })
  }

  const handleCorrectAnswerChange = (questionIndex, answerIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].answers.forEach((answer, idx) => {
        answer.correct = idx === answerIndex;
      });
      return {
        ...prevData,
        questions: updatedQuestions,
      }
    })
  }

  const handleAddQuestion = () => {
    if (quizData.number_of_questions < 10) {
      setQuizData((prevData) => ({
        ...prevData,
        number_of_questions: prevData.number_of_questions + 1,
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

  useEffect(() => {
    if (quiz && quiz.data) {
      setQuizData(quiz);
      console.log(quizData)
      console.log(quiz)
    }
  }, [quiz])

  console.log(quiz);

  const handleUpdateQuiz = async (e) => {
    e.preventDefault();
    console.log('Update Quiz:', quizData);

    try {
      const response = await axios.patch(`/api/quizzes/${quiz.id}/`, quizData, {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (response.status === 200) {
        console.log('Quiz updated successfully:', response.data);
      } else {
        console.error('Failed to update quiz:', response.statusText);
        setErrorMsg(response.statusText) 
      }
    } catch (error) {
      console.error('Error updating quiz:', error);
    }
  }

  const handleDeleteQuiz = async () => {
    console.log('Delete Quiz:', quizData.id);

    try {
      const response = await axios.delete(`/api/quizzes/${quiz.id}`, {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })

      if (response.status === 204) {
        console.log('Quiz deleted successfully');
        navigate(`/profile/${user}`);
      } else {
        console.error('Failed to delete quiz:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  }

  return (
    <Container>
      <h1>Edit or Delete Quiz</h1>
      <Form method="POST" onSubmit={handleUpdateQuiz}>
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

        <Form.Group controlId="quizTopic">
          <Form.Label>Topic</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter quiz topic"
            value={quizData.topic}
            onChange={(e) => handleInputChange('topic', e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="quizDifficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control
            as="select"
            value={quizData.difficulty}
            onChange={(e) => handleInputChange('difficulty', e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Control>
        </Form.Group>

        {[...Array(quizData.number_of_questions)].map((_, questionIndex) => (
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
        {errorMsg && <p className="danger">{errorMsg}</p>}
        <div className='button-container'>
          <Button variant="primary" onClick={handleAddQuestion}>
            Add Question
          </Button>

          <Button variant="warning" type="submit">
            Update Quiz
          </Button>

          <Button variant="danger" onClick={handleDeleteQuiz}>
            Delete Quiz
          </Button>
        </div>
      </Form>
    </Container>
  )
}