import { useLoaderData } from "react-router-dom";
import { activeUser } from "../utils/helpers/common";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Profile() {
  const userId = activeUser();
  const user = useLoaderData();

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <div className="profile-container">
            <Image
              src={user.profile_picture}
              alt="Profile"
              roundedCircle
              className="profile-picture"
            />
            <h4 className="mt-2">{user.username}</h4>
            <p>{user.bio}</p>
          </div>
        </Col>
        <Col md={9}>
          <div className="quizzes-container">
            <h2>Owned Quizzes</h2>
            <ul className="quiz-list">
              {user.owned_quizzes &&
                user.owned_quizzes.map((quiz) => (
                  <li key={quiz.id} className="quiz-item">
                    {quiz.name}
                  </li>
                ))}
            </ul>
            <h2 className="mt-4">Completed Quizzes</h2>
            <ul className="quiz-list">
              {user.completed_quizzes &&
                user.completed_quizzes.map((result) => (
                  <li key={result.quiz.id} className="quiz-item">
                    {result.quiz.name}
                  </li>
                ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}