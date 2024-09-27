import React, { useState } from 'react';
import '../../styles/ListVisualizer.css';

const ListVisualizer = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [index, setIndex] = useState('');
  const [currentNode, setCurrentNode] = useState(-1);
  const [isInserting, setIsInserting] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  // Insert element at the end of the list
  const insertElement = () => {
    if (value) {
      setList([...list, parseInt(value)]);
      setValue('');
    }
  };

  // Simulate traversal and insertion at a specific index
  const insertAtIndex = () => {
    const idx = parseInt(index);
    if (isNaN(idx) || idx < 0 || idx > list.length) {
      alert('Invalid index');
      return;
    }

    setIsInserting(true);
    let i = 0;

    const traverse = setInterval(() => {
      setCurrentNode(i);
      i++;
      if (i > idx) {
        clearInterval(traverse);
        performInsertion(idx);
      }
    }, 500); // Animate traversal with 500ms delay
  };

  const performInsertion = (idx) => {
    const newList = [...list];
    newList.splice(idx, 0, parseInt(value));
    setList(newList);
    setIsInserting(false);
    setCurrentNode(-1); // Reset the current node
    setValue('');
    setIndex('');
  };

  // Remove element from the end of the list
  const removeElement = () => {
    const newList = [...list];
    newList.pop(); // Remove last element
    setList(newList);
  };

  // Simulate traversal and removal from a specific index
  const removeAtIndex = () => {
    const idx = parseInt(index);
    if (isNaN(idx) || idx < 0 || idx >= list.length) {
      alert('Invalid index');
      return;
    }

    setIsRemoving(true);
    let i = 0;

    const traverse = setInterval(() => {
      setCurrentNode(i);
      i++;
      if (i > idx) {
        clearInterval(traverse);
        performRemoval(idx);
      }
    }, 500); // Animate traversal with 500ms delay
  };

  const performRemoval = (idx) => {
    const newList = [...list];
    newList.splice(idx, 1);
    setList(newList);
    setIsRemoving(false);
    setCurrentNode(-1); // Reset the current node
    setIndex('');
  };

  return (
    <div className="list-container">
      <h2>Linked List Visualization Demo</h2>
      <div className="list-visualization">
        {list.map((item, idx) => (
          <div
            key={idx}
            className={`list-node ${currentNode === idx ? 'highlight' : ''}`}
          >
            {item}
            {idx < list.length - 1 && <div className="arrow">→</div>}
          </div>
        ))}
      </div>

      <div className="controls">
        <input
          type="number"
          value={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
          disabled={isInserting || isRemoving}
        />
        <input
          type="number"
          value={index}
          placeholder="Index"
          onChange={(e) => setIndex(e.target.value)}
          disabled={isInserting || isRemoving}
        />
        <div>
          <button onClick={insertElement} disabled={isInserting || isRemoving}>
            Insert at End
          </button>
          <button onClick={insertAtIndex} disabled={isInserting || isRemoving}>
            Insert at Index
          </button>
          <button onClick={removeElement} disabled={isInserting || isRemoving}>
            Remove from End
          </button>
          <button onClick={removeAtIndex} disabled={isInserting || isRemoving}>
            Remove at Index
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListVisualizer;
