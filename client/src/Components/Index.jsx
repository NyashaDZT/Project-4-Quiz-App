import { useLoaderData, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Filter from "./Filter";

export default function Index(){

  const [ quizzes, setQuizzes ] = useState([])
  const [ filteredQuizzes, setFilteredQuizzes ] = useState([])

  const quiz = useLoaderData()
  console.log(quiz)

  useEffect(()=> {
    setQuizzes(quiz)
    console.log(quiz)
  }, [quiz])

  return (
    <>
      <Row>
        <Col xs={4} md={3} id="filters" className="d-flex align-items-center justify-content-center" >
          <Filter quizzes={quizzes} setFilteredQuizzes={setFilteredQuizzes} />
        </Col>
        <Col xs={14} md={9}>
          <section className="quizzes" id="view">
          {filteredQuizzes.map(quiz => (
              <Link key={quiz.id} to={`/quizzes/${quiz.id}`} style={{ textDecoration: 'none' }}>
                <Card className="mb-4 card" style={{ cursor: 'pointer' }}>
                  <Card.Body>
                    <Card.Title>{quiz.name}</Card.Title>
                    <Card.Text>{quiz.topic}</Card.Text>
                    {/* Add more quiz details as needed */}
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </section>
        </Col>
      </Row>
    </>
  )
}