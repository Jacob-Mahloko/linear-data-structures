import React, { useState } from 'react';
import '../../styles/DequeVisualizer.css';

const DequeVisualizer = () => {
  const [deque, setDeque] = useState([]);
  const [value, setValue] = useState('');
  const [animatingIndex, setAnimatingIndex] = useState(null);
  
  // Enqueue from front
  const enqueueFront = () => {
    if (value) {
      setDeque([value, ...deque]);
      setValue('');
    }
  };

  // Enqueue from back
  const enqueueBack = () => {
    if (value) {
      setDeque([...deque, value]);
      setValue('');
    }
  };

  // Dequeue from front with animation
  const dequeueFront = () => {
    if (deque.length === 0) {
      alert('Deque is empty');
      return;
    }

    setAnimatingIndex(0);
    setTimeout(() => {
      const newDeque = [...deque];
      newDeque.shift(); // Remove the front element
      setDeque(newDeque);
      setAnimatingIndex(null);
    }, 500); // Delay for animation
  };

  // Dequeue from back with animation
  const dequeueBack = () => {
    if (deque.length === 0) {
      alert('Deque is empty');
      return;
    }

    setAnimatingIndex(deque.length - 1);
    setTimeout(() => {
      const newDeque = [...deque];
      newDeque.pop(); // Remove the back element
      setDeque(newDeque);
      setAnimatingIndex(null);
    }, 500); // Delay for animation
  };

  return (
    <div className="deque-container">
      <h2>Deque Visualization Demo</h2>
      <div className="deque-visualization">
      {deque.length > 0 && <text>Front</text>}
        {deque.map((item, idx) => (
          <div
            key={idx}
            className={`deque-item ${animatingIndex === idx ? 'animating' : ''}`}
          >
            {item}
          </div>
        ))}
        {deque.length > 0 && <text>Back</text>}
      </div>

      <div className="controls">
        <input
          className='text-input'
          value={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button onClick={enqueueFront}>
            Enqueue Front
          </button>
          <button onClick={enqueueBack}>
            Enqueue Back
          </button>
          <button onClick={dequeueFront}>
            Dequeue Front
          </button>
          <button onClick={dequeueBack}>
            Dequeue Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DequeVisualizer;
