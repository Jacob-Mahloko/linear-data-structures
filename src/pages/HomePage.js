import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/HomePage.css';

const HomePage = () => {
  const [showStructures, setShowStructures] = useState(false);
  const router = useNavigate();
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
            <li onClick={()=>router('array')}>Array</li>
            <li onClick={()=>router('stack')}>Stack</li>
            <li onClick={()=>router('queue')}>Queue</li>
            <li onClick={()=>router('deque')}>Deque</li>
            <li onClick={()=>router('editor')}>Editor</li>
            <li onClick={()=>router('list')}>List</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
