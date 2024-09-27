import React from 'react';
import './Modal.css'; // Create a CSS file for modal styles

const Modal = ({ isOpen, onClose, score, totalQuestions }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Quiz Complete!</h2>
        <p>Your score: {score}/{totalQuestions}</p>
        <button onClick={onClose} className="modal-close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
