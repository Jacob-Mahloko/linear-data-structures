import React, { useState } from 'react';
import Modal from './modal/Modal'; // Import the Modal component
import '../styles/Quiz.css'; // Add CSS styles for the Quiz component

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    setShowFeedback(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsModalOpen(true); // Open modal when quiz is complete
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetQuiz(); // Reset quiz after closing modal
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      <h3>Quiz</h3>
      <p className="question">{currentQuestion.question}</p>
      <ul className="options-list">
        {currentQuestion.options.map((option, index) => (
          <li key={index} className={`option ${showFeedback ? (option.isCorrect ? 'correct' : 'wrong') : ''}`}>
            <button 
              className={`option-button ${selectedAnswer !== null ? (option.isCorrect ? 'correct' : 'wrong') : ''}`}
              onClick={() => handleAnswerClick(option.isCorrect)}
              disabled={showFeedback}
            >
              {option.answer}
            </button>
          </li>
        ))}
      </ul>

      {showFeedback && (
        <div className="feedback">
          <p className={`feedback-message ${selectedAnswer ? 'correct' : 'wrong'}`}>
            {selectedAnswer ? 'Correct!' : 'Wrong!'}
          </p>
          <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}

      {/* Modal for displaying score */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        score={score} 
        totalQuestions={questions.length} 
      />
    </div>
  );
};

export default Quiz;
