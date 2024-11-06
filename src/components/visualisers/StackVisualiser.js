import React, { useState } from 'react';
import '../../styles/StackVisualizer.css';

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState('');
  const [animatingIndex, setAnimatingIndex] = useState(null);
  
  // Push element onto the stack
const pushElement = () => {
  if (value) {
    setStack([...stack, parseInt(value)]);
    setValue('');
  }
};

  // Pop element from the stack with animation
  const popElement = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }

    // Start the animation for the top element
    setAnimatingIndex(0);
    setTimeout(() => {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
      setAnimatingIndex(null); // Reset animation index
    }, 500); // Delay for animation
  };

  return (
    <div className="stack-container">
      <h2>Stack Visualization Demo</h2>
      <div className="stack-visualization">
        <div className="stack">
          {stack.slice().reverse().map((item, idx) => (
            <div className='stack-wrapper'>
              {idx === 0 && <div className='top-indicator'>{"Top >"}</div>}
              <div
                key={idx}
                className={`stack-item ${animatingIndex === idx ? 'animating' : ''}`}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <input
          type="number"
          value={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button onClick={pushElement}>
            Push
          </button>
          <button onClick={popElement}>
            Pop
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackVisualizer;
