import React, { useState } from "react";
import { applicationBasedQuestions } from "../questions/ApplicationBasedQuestions";
import ApplicationEvaluation from "../ApplicationEvaluation";

const ApplicationBasedTask = () => {
  const [userAnswers, setUserAnswers] = useState(
    applicationBasedQuestions.map(() => "")
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState([]);

  const handleAnswerSelection = (index, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleComplete = () => {
    // Collecting results
    const results = applicationBasedQuestions.map((question, index) => {
      const answer = userAnswers[index];
      const isCorrect = answer === question.correctAnswer;
      return {
        id: question.id, // For numbering purposes
        category: question.category,
        question: question.question,
        selectedAnswer: answer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation,
      };
    });

    // Update evaluation results and open the modal
    setEvaluationResults(results);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <h2>Application-Based Task: Choose the most suitable data structure</h2>
      {applicationBasedQuestions.map((question, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>
            {question.id}. {question.question}
          </p>
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  id={`question-${index}-option-${optionIndex}`}
                  name={`question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerSelection(index, option)}
                />
                <label htmlFor={`question-${index}-option-${optionIndex}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        style={{
          flex: 1,
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          fontSize: "1rem",
        }}
        onClick={handleComplete}
      >
        Complete Task
      </button>

      {/* Modal to show results */}
      {isModalOpen && (
        <ApplicationEvaluation
          results={evaluationResults}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ApplicationBasedTask;
