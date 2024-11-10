import React, { useState } from "react";
import { theoryQuestions } from "../questions/TheoryQuestions";
import TheoryEvaluation from "../TheoryEvaluation";

const TheoryTask = () => {
  const [userAnswers, setUserAnswers] = useState(
    theoryQuestions.map(() => "")
  );
  const [evaluationResults, setEvaluationResults] = useState(null); 
  const [modalOpen, setModalOpen] = useState(false);

  // Handle answer selection for each question
  const handleAnswerSelection = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  // Complete the task and pass results to parent component
  const handleComplete = () => {
    const categorizedResults = userAnswers.reduce((acc, answer, index) => {
      const category = theoryQuestions[index].category;
      const correctAnswer = theoryQuestions[index].answer;

      if (!acc[category]) acc[category] = { total: 0, correct: 0 };

      acc[category].total += 1;
      if (answer === correctAnswer) acc[category].correct += 1;

      return acc;
    }, {});

    setEvaluationResults(categorizedResults);
    setModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Simulation Task: Answer all questions below</h2>
      <form>
        {theoryQuestions.map((question, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <p>
              {question.id}. {question.question}
            </p>
            <div>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    id={`q${index}_option${optionIndex}`}
                    name={`question${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleAnswerSelection(index, option)}
                  />
                  <label htmlFor={`q${index}_option${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </form>

      {/* Button to complete the task */}
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
        Submit
      </button>

      {/* Show evaluation results as a modal */}
      {modalOpen && evaluationResults && (
        <TheoryEvaluation
          results={evaluationResults}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TheoryTask;
