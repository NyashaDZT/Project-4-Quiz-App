import { useState, useEffect } from "react";

export default function Filter({ quizzes, setFilteredQuizzes }) {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedNumQuestions, setSelectedNumQuestions] = useState("");

  useEffect(() => {
    // Filtering logic based on selected filters
    let filtered = quizzes;

    if (selectedTopic) {
      filtered = filtered.filter((quiz) => quiz.topic === selectedTopic);
    }

    if (selectedDifficulty) {
      filtered = filtered.filter((quiz) => quiz.difficulty === selectedDifficulty);
    }

    if (selectedNumQuestions) {
      filtered = filtered.filter((quiz) => quiz.number_of_questions === parseInt(selectedNumQuestions));
    }

    setFilteredQuizzes(filtered);
  }, [quizzes, selectedTopic, selectedDifficulty, selectedNumQuestions, setFilteredQuizzes]);

  return (
    <div className="filter-container">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>Topic:</label>
        <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
          <option value="">All Topics</option>
          {/* Add options dynamically based on available topics */}
          {Array.from(new Set(quizzes.map((quiz) => quiz.topic))).map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Difficulty:</label>
        <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Number of Questions:</label>
        <select value={selectedNumQuestions} onChange={(e) => setSelectedNumQuestions(e.target.value)}>
          <option value="">All Numbers</option>
          {/* Add options dynamically based on available number of questions */}
          {Array.from(new Set(quizzes.map((quiz) => quiz.number_of_questions))).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}