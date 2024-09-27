import React, { useState } from 'react';
import '../../styles/ArrayVisualizer.css';

const ArrayVisualizer = () => {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState('');
  const [index, setIndex] = useState('');
  const [animatingIndex, setAnimatingIndex] = useState(null);
  
  // Insert element at the end of the array
  const insertElement = () => {
    if (value) {
      setArray([...array, parseInt(value)]);
      setValue('');
    }
  };

  // Insert at a specific index with animation
  const insertAtIndex = () => {
    const idx = parseInt(index);
    if (isNaN(idx) || idx < 0 || idx > array.length) {
      alert('Invalid index');
      return;
    }

    // Start the animation
    setAnimatingIndex(idx);
    setTimeout(() => {
      const newArray = [...array];
      newArray.splice(idx, 0, parseInt(value));
      setArray(newArray);
      setValue('');
      setIndex('');
      setAnimatingIndex(null); // Reset animation index
    }, 500); // Delay for animation
  };

  // Remove element from the end of the array
  const removeElement = () => {
    const newArray = [...array];
    newArray.pop(); // Remove last element
    setArray(newArray);
  };

  // Remove element from a specific index with animation
  const removeAtIndex = () => {
    const idx = parseInt(index);
    if (isNaN(idx) || idx < 0 || idx >= array.length) {
      alert('Invalid index');
      return;
    }

    // Start the animation
    setAnimatingIndex(idx);
    setTimeout(() => {
      const newArray = [...array];
      newArray.splice(idx, 1); // Remove the element at the specified index
      setArray(newArray);
      setIndex('');
      setAnimatingIndex(null); // Reset animation index
    }, 500); // Delay for animation
  };

  return (
    <div className="array-container">
      <h2>Array Visualization Demo</h2>
      <div className="array-visualization">
        {array.map((item, idx) => (
          <div
            key={idx}
            className={`array-item ${animatingIndex === idx ? 'animating' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="controls">
        <input
          type="number"
          value={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="number"
          value={index}
          placeholder="Index"
          onChange={(e) => setIndex(e.target.value)}
        />
        <div>
          <button onClick={insertElement}>
            Insert at End
          </button>
          <button onClick={insertAtIndex}>
            Insert at Index
          </button>
          <button onClick={removeElement}>
            Remove from End
          </button>
          <button onClick={removeAtIndex}>
            Remove at Index
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
