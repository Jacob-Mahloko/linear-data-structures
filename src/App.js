import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArrayPage from './pages/ArrayPage';
import StackPage from './pages/StackPage';
import QueuePage from './pages/QueuePage';
import DequePage from './pages/DequePage';
import ListPage from './pages/ListPage';
import AssessmentPage from './pages/AssessmentPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/array">Array</Link></li>
            <li><Link to="/stack">Stack</Link></li>
            <li><Link to="/queue">Queue</Link></li>
            <li><Link to="/deque">Deque</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/assessment">Assessment</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/array" element={<ArrayPage />} />
          <Route path="/stack" element={<StackPage />} />
          <Route path="/queue" element={<QueuePage />} />
          <Route path="/deque" element={<DequePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
        </Routes>
      </div>

      <footer className="footer">
          <p>&copy; 2024 University Of Pretoria (COS 750) . All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
