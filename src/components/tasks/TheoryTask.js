import React, { useState } from "react";
import { theoryQuestions } from "../questions/TheoryQuestions";
import TheoryEvaluation from "../TheoryEvaluation"; // Import the TheoryEvaluation component

const TheoryTask = () => {
  const [userAnswers, setUserAnswers] = useState(
    theoryQuestions.map(() => "") // Initialize empty answers for each question
  );
  const [evaluationResults, setEvaluationResults] = useState(null); // Store the evaluation results
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility state

  // Handle answer selection for each question
  const handleAnswerSelection = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer; // Update the specific answer for the question
    setUserAnswers(updatedAnswers);
  };

  // Complete the task and pass results to parent component
  const handleComplete = () => {
    // Calculate and evaluate the answers
    const categorizedResults = userAnswers.reduce((acc, answer, index) => {
      const category = theoryQuestions[index].category; // Get category from the question
      const correctAnswer = theoryQuestions[index].answer; // Get correct answer from the question

      // Initialize category if it doesn't exist in the accumulator
      if (!acc[category]) acc[category] = { total: 0, correct: 0 };

      acc[category].total += 1; // Increment total question count for this category
      if (answer === correctAnswer) acc[category].correct += 1; // Check if the answer is correct and increment correct count

      return acc;
    }, {});

    // Set the results and mark the task as completed
    setEvaluationResults(categorizedResults);
    setModalOpen(true); // Open the modal when the task is complete
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalOpen(false); // Set modal visibility to false
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
