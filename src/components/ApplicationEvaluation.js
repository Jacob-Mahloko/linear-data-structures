import React from "react";

const ApplicationEvaluation = ({ results, onClose }) => {
  // Function to calculate overall feedback based on accuracy
  const generateOverallFeedback = () => {
    const correctAnswers = results.filter((result) => result.isCorrect).length;
    const totalQuestions = results.length;
    const accuracy = (correctAnswers / totalQuestions) * 100;

    if (accuracy >= 75) {
      return `Great job overall! You have a strong understanding of the application-based concepts.`;
    } else if (accuracy >= 50) {
      return `Good effort! Focus on the sections that need improvement for a stronger grasp.`;
    } else {
      return `It seems like you may need to spend more time reviewing the application-based concepts. Keep practicing!`;
    }
  };

  // Calculate the total correct answers and total questions
  const totalCorrectAnswers = results.filter(
    (result) => result.isCorrect
  ).length;
  const totalQuestions = results.length;

  // Calculate the average score
  const averageScore = ((totalCorrectAnswers / totalQuestions) * 100).toFixed(
    2
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Application-Based Evaluation Results:</h3>
        {/* Scrollable content for questions */}
        <div className="scrollable-content">
          {results.map((result, index) => (
            <div key={index}>
              <p>
                {result.id}. Question: {result.question}
                <br />
                Your Answer: {result.selectedAnswer}
                <br />
                Correct Answer: {result.correctAnswer}
                <br />
                {/* Showing whether the answer was correct or not with a 0/1 or 1/1 format */}
                {result.isCorrect ? "1/1 (Correct)" : "0/1 (Incorrect)"}
              </p>
              <p>
                <strong>Explanation:</strong> {result.explanation}
              </p>
            </div>
          ))}
        </div>

        <h4>Overall Feedback:</h4>
        <p>{generateOverallFeedback()}</p>

        <h4>
          Total Score: {totalCorrectAnswers}/{totalQuestions} ({averageScore}%)
        </h4>

        <button
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontSize: "1rem",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplicationEvaluation;
