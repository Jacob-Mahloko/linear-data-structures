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
    setAnimatingIndex(stack.length - 1);
    setTimeout(() => {
      const newStack = [...stack];
      newStack.pop(); // Remove the top element
      setStack(newStack);
      setAnimatingIndex(null); // Reset animation index
    }, 500); // Delay for animation
  };

  return (
    <div className="stack-container">
      <h2>Stack Visualization Demo</h2>
      <div className="stack-visualization">
        <div className="arrow" style={{ marginTop: `${(stack.length * 65) + 10}px` }}>top</div> {/* Dynamic position */}
        <div className="stack">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className={`stack-item ${animatingIndex === idx ? 'animating' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="bottom-indicator">Bottom</div> {/* Indicator for the bottom of the stack */}
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
