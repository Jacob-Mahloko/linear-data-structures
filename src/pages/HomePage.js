import React, { useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
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
            <li><Link to="/array">Array</Link></li>
            <li><Link to="/stack">Stack</Link></li>
            <li><Link to="/queue">Queue</Link></li>
            <li><Link to="/deque">Deque</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
