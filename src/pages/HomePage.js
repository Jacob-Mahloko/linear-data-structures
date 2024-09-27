import React, { useState } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const [showStructures, setShowStructures] = useState(false);

  const handleExploreClick = () => {
    setShowStructures(!showStructures);
  };

  return (
    <div className="home-container">
      <div className="animation-background" />
      <h1 className="animated-title">Welcome to the Linear Data Structures Visualization</h1>
      <p className="animated-text">Select a data structure to learn more and visualize its operations.</p>
      
      <div className="button-container">
        <button className="explore-button" onClick={handleExploreClick}>
          Explore
        </button>
      </div>

      {showStructures && (
        <div className="data-structure-list">
          <h2>Select a Data Structure:</h2>
          <ul>
            <li><a href="/array">Arrays</a></li>
            <li><a href="/stack">Stacks</a></li>
            <li><a href="/queue">Queues</a></li>
            <li><a href="/deque">Deques</a></li>
            <li><a href="/list">Lists</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
