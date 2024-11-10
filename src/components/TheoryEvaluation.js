import React from "react";

const TheoryEvaluation = ({ results, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Evaluation Results:</h3>
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
              ).toFixed(2)}
              %
            </p>
          </div>
        ))}
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
