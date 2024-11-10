import React, { useState } from "react";
import { applicationBasedQuestions } from "../questions/ApplicationBasedQuestions";

const ApplicationBasedTask = ({ onComplete }) => {
  const [userAnswers, setUserAnswers] = useState(
    applicationBasedQuestions.map(() => "")
  );

  const handleAnswerSelection = (index, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleComplete = () => {
    const results = userAnswers.map((answer, index) => ({
      question: applicationBasedQuestions[index].question,
      selectedAnswer: answer,
      correctAnswer: applicationBasedQuestions[index].correctAnswer,
      isCorrect: answer === applicationBasedQuestions[index].correctAnswer,
    }));
    onComplete(results);
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
    </div>
  );
};

export default ApplicationBasedTask;
