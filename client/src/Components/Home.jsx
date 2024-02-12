import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { activeUser } from '../utils/helpers/common';

export default function Home() {
  const user = activeUser()

  return (
    <Container className="mt-5 text-center"> {/* Add text-center class */}
      <Row className="justify-content-center">
        <Col xs={10} md={8} lg={6}>
          <h1>Welcome to Quizlympics</h1>
          <p className="lead">
            Quizlympics is an exciting platform to test and enhance your knowledge.
            Get ready for a challenging quiz experience!
          </p>
          {user ? 
            <p></p>
            :
            <p>Please register to take part in Quizlympics!</p>
          }
          <div className="button-container mt-4"> {/* Add mt-4 for margin */}
            {user ? (
              <Link to="/quizzes">
                <Button variant="success" className="blue-button"> {/* Add blue-button class */}
                  Explore Quizzes
                </Button>
              </Link>
            ) : (
              <> 
                <Link to="/login">
                  <Button variant="primary" className="blue-button mr-3"> 
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary" className="blue-button"> 
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}