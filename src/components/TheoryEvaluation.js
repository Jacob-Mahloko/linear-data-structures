import React from "react";

const TheoryEvaluation = ({ results, onClose }) => {
  // Function to generate feedback based on accuracy
  const generateFeedback = (category) => {
    const accuracy =
      (results[category].correct / results[category].total) * 100;

    if (accuracy >= 75) {
      return `You did well in this section!`;
    } else {
      return `This section needs some more work. Keep practicing!`;
    }
  };

  // Function to generate overall feedback based on the average performance
  const generateOverallFeedback = () => {
    let totalQuestions = 0;
    let totalCorrect = 0;

    Object.keys(results).forEach((category) => {
      totalQuestions += results[category].total;
      totalCorrect += results[category].correct;
    });

    const overallAccuracy = (totalCorrect / totalQuestions) * 100;

    if (overallAccuracy >= 75) {
      return `Great job overall! You have a strong understanding of the material.`;
    } else if (overallAccuracy >= 50) {
      return `Good effort! Focus on the sections that need improvement for a stronger grasp.`;
    } else {
      return `It seems like you may need to spend more time reviewing the material. Don't give up!`;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Evaluation Results:</h3>
        {/* Scrollable area */}
        <div className="scrollable-content">
          {Object.keys(results).map((category) => (
            <div key={category}>
              <h4>{category}</h4>
              <p>
                Total Questions: {results[category].total} <br />
                Correct Answers: {results[category].correct} <br />
                Accuracy:{" "}
                {(
                  (results[category].correct / results[category].total) *
                  100
                ).toFixed(2)}{" "}
                %
              </p>
              <p>{generateFeedback(category)}</p>
            </div>
          ))}
        </div>

        <h4>Overall Feedback:</h4>
        <p>{generateOverallFeedback()}</p>

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

export default TheoryEvaluation;
