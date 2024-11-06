import React, { useState } from 'react';
import '../../styles/QueueVisualizer.css';

const QueueVisualizer = () => {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState('');
  const [animatingIndex, setAnimatingIndex] = useState(null);
  
  // Enqueue element to the queue
  const enqueueElement = () => {
    if (value) {
      setQueue([...queue, value]);
      setValue('');
    }
  };

  // Dequeue element from the queue with animation
  const dequeueElement = () => {
    if (queue.length === 0) {
      alert('Queue is empty');
      return;
    }

    // Start the animation for the front element
    setAnimatingIndex(0);
    setTimeout(() => {
      const newQueue = [...queue];
      newQueue.shift(); // Remove the front element
      setQueue(newQueue);
      setAnimatingIndex(null); // Reset animation index
    }, 500); // Delay for animation
  };

  return (
    <div className="queue-container">
      <h2>Queue Visualization Demo</h2>
      <div className="queue-visualization">
        {queue.length > 0 && <text>First</text>}
        {queue.map((item, idx) => (
          <div
            key={idx}
            className={`queue-item ${animatingIndex === idx ? 'animating' : ''}`}
          >
            {item}
          </div>
        ))}
        {queue.length > 0 && <text>Last</text>}
      </div>

      <div className="controls">
        <input
          className='text-input'
          value={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button onClick={enqueueElement}>
            Enqueue
          </button>
          <button onClick={dequeueElement}>
            Dequeue
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueVisualizer;
