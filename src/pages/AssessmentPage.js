import React, { useState } from "react";
import TheoryTask from "../components/tasks/TheoryTask";
import ProblemSolvingTask from "../components/tasks/ProblemSolvingTask";
import ApplicationBasedTask from "../components/tasks/ApplicationBasedTask";

const AssessmentPage = () => {
  const [currentTask, setCurrentTask] = useState(""); // Track the selected task

  const renderTask = () => {
    switch (currentTask) {
      case "theory":
        return <TheoryTask />;
      case "problemSolving":
        return <ProblemSolvingTask />;
      case "applicationBased":
        return <ApplicationBasedTask />;
      default:
        return null;
    }
  };

  return (
    <div style={{ margin: "40px 50px" }}>
      <h1>Linear Data Structure Assessment</h1>

      {/* Task Selection Buttons */}
      <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontSize: "1rem",
          }}
          onClick={() => setCurrentTask("theory")}
        >
          Theory Task
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontSize: "1rem",
          }}
          onClick={() => setCurrentTask("problemSolving")}
        >
          Problem Solving Task
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontSize: "1rem",
          }}
          onClick={() => setCurrentTask("applicationBased")}
        >
          Application-Based Task
        </button>
      </div>

      {/* Display Selected Task */}
      {renderTask()}
    </div>
  );
};

export default AssessmentPage;
