import React, { useState } from "react";

// Button style for consistency
const buttonStyle = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  fontSize: "1rem",
  margin: "5px",
};

// Stack visualization component with labels inside the box
const StackVisualizer = ({ onPush, onPop, stack, onReset, lastStackIndex }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Stack Visualization</h3>
      <div
        style={{
          border: "2px solid #007bff",
          padding: "10px",
          height: "200px",
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // for absolute positioning of labels
        }}
      >
        {stack.length === 0 ? (
          <p>Stack is empty</p>
        ) : (
          stack.map((item, index) => (
            <div
              key={index}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor:
                  index === lastStackIndex
                    ? "#ff6347" // Highlight last pushed item
                    : index % 2 === 0
                    ? "#28a745" // Even index: green
                    : "#4caf50", // Odd index: light green
                color: "white",
                borderRadius: "5px",
                width: "50px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))
        )}
        {stack.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Label at the top of the stack
              left: "10px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            Top
          </div>
        )}
      </div>
      <button onClick={onPush} style={buttonStyle}>
        Push
      </button>
      <button onClick={onPop} style={buttonStyle}>
        Pop
      </button>
    </div>
  );
};

// Queue visualization component with labels inside the box
const QueueVisualizer = ({ onEnqueue, onDequeue, queue, onReset, lastQueueIndex }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Queue Visualization</h3>
      <div
        style={{
          border: "2px solid #007bff",
          padding: "10px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // for absolute positioning of labels
        }}
      >
        {queue.length === 0 ? (
          <p>Queue is empty</p>
        ) : (
          queue.map((item, index) => (
            <div
              key={index}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor:
                  index === lastQueueIndex
                    ? "#ff6347" // Highlight last enqueued item
                    : index % 2 === 0
                    ? "#28a745" // Even index: green
                    : "#4caf50", // Odd index: light green
                color: "white",
                borderRadius: "5px",
                width: "50px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))
        )}
        {queue.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Label at the front of the queue
              left: "10px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            Front
          </div>
        )}
        {queue.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Label at the back of the queue
              right: "10px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            Back
          </div>
        )}
      </div>
      <button onClick={onEnqueue} style={buttonStyle}>
        Enqueue
      </button>
      <button onClick={onDequeue} style={buttonStyle}>
        Dequeue
      </button>
    </div>
  );
};

// Deque visualization component with labels inside the box
const DequeVisualizer = ({
  onInsertFront,
  onInsertRear,
  onRemoveFront,
  onRemoveRear,
  deque,
  onReset,
  lastDequeIndex
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Deque Visualization</h3>
      <div
        style={{
          border: "2px solid #007bff",
          padding: "10px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // for absolute positioning of labels
        }}
      >
        {deque.length === 0 ? (
          <p>Deque is empty</p>
        ) : (
          deque.map((item, index) => (
            <div
              key={index}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor:
                  index === lastDequeIndex
                    ? "#ff6347" // Highlight last inserted item
                    : index % 2 === 0
                    ? "#28a745" // Even index: green
                    : "#4caf50", // Odd index: light green
                color: "white",
                borderRadius: "5px",
                width: "50px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))
        )}
        {deque.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Label at the front of the deque
              left: "10px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            Front
          </div>
        )}
        {deque.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Label at the rear of the deque
              right: "10px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            Rear
          </div>
        )}
      </div>
      <button onClick={onInsertFront} style={buttonStyle}>
        Insert Front
      </button>
      <button onClick={onInsertRear} style={buttonStyle}>
        Insert Rear
      </button>
      <button onClick={onRemoveFront} style={buttonStyle}>
        Remove Front
      </button>
      <button onClick={onRemoveRear} style={buttonStyle}>
        Remove Rear
      </button>
    </div>
  );
};

// Array visualization component with labels inside the box
const ArrayVisualizer = ({ onAdd, onRemove, array, onReset, lastArrayIndex }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Array Visualization</h3>
      <div
        style={{
          border: "2px solid #007bff",
          padding: "10px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // for absolute positioning of labels
        }}
      >
        {array.length === 0 ? (
          <p>Array is empty</p>
        ) : (
          array.map((item, index) => (
            <div
              key={index}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor:
                  index === lastArrayIndex
                    ? "#ff6347" // Highlight last added item
                    : index % 2 === 0
                    ? "#28a745" // Even index: green
                    : "#4caf50", // Odd index: light green
                color: "white",
                borderRadius: "5px",
                width: "50px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))
        )}
        {array.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Label at the front of the array
              left: "10px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            Front
          </div>
        )}
        {array.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px", // Label at the back of the array
              right: "10px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            Back
          </div>
        )}
      </div>
      <button onClick={onAdd} style={buttonStyle}>
        Add
      </button>
      <button onClick={onRemove} style={buttonStyle}>
        Remove
      </button>
    </div>
  );
};

// Linked List visualization component
const ListVisualizer = ({ list, onRemoveMiddle, onReset }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Linked List Visualization</h3>
      <div
        style={{
          border: "2px solid #007bff",
          padding: "10px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list.length === 0 ? (
          <p>Linked List is empty</p>
        ) : (
          list.map((item, index) => (
            <div
              key={index}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor:
                  index === 0
                    ? "#28a745" // Head: green
                    : index === list.length - 1
                    ? "#ff6347" // Tail: red
                    : "#4caf50", // Other nodes: light green
                color: "white",
                borderRadius: "5px",
                width: "50px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))
        )}
      </div>
      <div style={{ marginTop: "10px" }}>
        <span style={{ fontWeight: "bold" }}>Head: </span>
        {list.length > 0 && list[0]}
        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>Tail: </span>
        {list.length > 0 && list[list.length - 1]}
      </div>
      <button onClick={onRemoveMiddle} style={buttonStyle}>
        Remove Middle
      </button>
      <button onClick={onReset} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
};

// Problem Solving Task component
const ProblemSolvingTask = () => {
  const initialList = [5, 10, 15, 20, 25];

  const [stack, setStack] = useState([]);
  const [queue, setQueue] = useState([]);
  const [deque, setDeque] = useState([]);
  const [array, setArray] = useState([]);
  const [list, setList] = useState([5, 10, 15, 20, 25]);
  const [inputValue, setInputValue] = useState("");
  const [stackAnswer, setStackAnswer] = useState("");
  const [queueAnswer, setQueueAnswer] = useState("");
  const [dequeAnswer, setDequeAnswer] = useState("");
  const [arrayAnswer, setArrayAnswer] = useState("");
  const [listAnswer, setListAnswer] = useState("");

  const [stackFeedback, setStackFeedback] = useState("");
  const [queueFeedback, setQueueFeedback] = useState("");
  const [dequeFeedback, setDequeFeedback] = useState("");
  const [arrayFeedback, setArrayFeedback] = useState("");
  const [listFeedback, setListFeedback] = useState("");

  const [lastStackIndex, setLastStackIndex] = useState(null);
  const [lastQueueIndex, setLastQueueIndex] = useState(null);
  const [lastDequeIndex, setLastDequeIndex] = useState(null);
  const [lastArrayIndex, setLastArrayIndex] = useState(null);

  // Stack operations
  const handlePush = () => {
    setStack((prevStack) => {
      const newStack = [...prevStack, inputValue];
      setLastStackIndex(newStack.length - 1);
      setInputValue(""); // Clear input after push
      return newStack;
    });
  };

  const handlePop = () => {
    setStack((prevStack) => {
      const newStack = prevStack.slice(0, -1);
      return newStack;
    });
  };

  // Queue operations
  const handleEnqueue = () => {
    setQueue((prevQueue) => {
      const newQueue = [...prevQueue, inputValue];
      setLastQueueIndex(newQueue.length - 1);
      setInputValue(""); // Clear input after enqueue
      return newQueue;
    });
  };

  const handleDequeue = () => {
    setQueue((prevQueue) => {
      const newQueue = prevQueue.slice(1);
      return newQueue;
    });
  };

  // Deque operations
  // Deque operations with fixed lastDequeIndex highlighting
  const handleInsertFront = () => {
    setDeque((prevDeque) => {
      const newDeque = [inputValue, ...prevDeque];
      setLastDequeIndex(0); // Last added item is at the front
      setInputValue(""); // Clear input after inserting at front
      return newDeque;
    });
  };

  const handleInsertRear = () => {
    setDeque((prevDeque) => {
      const newDeque = [...prevDeque, inputValue];
      setLastDequeIndex(newDeque.length - 1); // Last added item is at the rear
      setInputValue(""); // Clear input after inserting at rear
      return newDeque;
    });
  };

  const handleRemoveFront = () => {
    setDeque((prevDeque) => {
      const newDeque = prevDeque.slice(1);
      if (newDeque.length > 0) {
        setLastDequeIndex(newDeque.length - 1); // Update to the last element in the deque
      } else {
        setLastDequeIndex(null); // Reset when deque is empty
      }
      return newDeque;
    });
  };

  const handleRemoveRear = () => {
    setDeque((prevDeque) => {
      const newDeque = prevDeque.slice(0, -1);
      if (newDeque.length > 0) {
        setLastDequeIndex(newDeque.length - 1); // Update to the last element in the deque
      } else {
        setLastDequeIndex(null); // Reset when deque is empty
      }
      return newDeque;
    });
  };

  // Array operations
  const handleAddToArray = () => {
    setArray((prevArray) => {
      const newArray = [...prevArray, inputValue];
      setLastArrayIndex(newArray.length - 1);
      setInputValue(""); // Clear input after add
      return newArray;
    });
  };

  const handleRemoveFromArray = () => {
    setArray((prevArray) => {
      const newArray = prevArray.slice(0, -1);
      return newArray;
    });
  };

  // List operations
  const handleRemoveMiddleNode = () => {
    setList((prevList) => {
      const middleIndex = Math.floor(prevList.length / 2);
      return [
        ...prevList.slice(0, middleIndex),
        ...prevList.slice(middleIndex + 1),
      ];
    });
  };
  const handleResetList = () => {
    setList(initialList);
  };

  const handleAnswer = (type, userInput) => {
    const correctAnswers = {
      stack: "3",
      queue: "Y",
      deque: "B",
      array: "10",
      list: "20",
    };

    return userInput === correctAnswers[type]
      ? "Correct!"
      : "Incorrect! Please try again.";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Problem Solving with Data Structures</h2>
      <p>Note: The red boxes indicate the newest added item</p>

      <div>
        <div style={{ marginBottom: "20px" }}>
          <h3>Stack</h3>
          <p>
            Question: If you push the numbers 1, 2, and 3 onto the stack, what
            will be the top element?
          </p>
          <input
            type="text"
            value={stackAnswer}
            onChange={(e) => setStackAnswer(e.target.value)}
            placeholder="Enter your answer"
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={() => {
              const result = handleAnswer("stack", stackAnswer);
              setStackFeedback(result);
            }}
            style={buttonStyle}
          >
            Submit Answer
          </button>
          <span style={{ marginLeft: "10px" }}>{stackFeedback}</span>
          <StackVisualizer
            onPush={handlePush}
            onPop={handlePop}
            stack={stack}
            lastStackIndex={lastStackIndex}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Queue</h3>
          <p>
            Question: If you enqueue 'X' and 'Y', then dequeue once, which
            element will be at the front?
          </p>
          <input
            type="text"
            value={queueAnswer}
            onChange={(e) => setQueueAnswer(e.target.value)}
            placeholder="Enter your answer"
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={() => {
              const result = handleAnswer("queue", queueAnswer);
              setQueueFeedback(result);
            }}
            style={buttonStyle}
          >
            Submit Answer
          </button>
          <span style={{ marginLeft: "10px" }}>{queueFeedback}</span>
          <QueueVisualizer
            onEnqueue={handleEnqueue}
            onDequeue={handleDequeue}
            queue={queue}
            lastQueueIndex={lastQueueIndex}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Deque</h3>
          <p>
            Question: If you insert 'A' at the front and 'B' at the rear, then
            remove from the front, which element remains at the front?
          </p>
          <input
            type="text"
            value={dequeAnswer}
            onChange={(e) => setDequeAnswer(e.target.value)}
            placeholder="Enter your answer"
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={() => {
              const result = handleAnswer("deque", dequeAnswer);
              setDequeFeedback(result);
            }}
            style={buttonStyle}
          >
            Submit Answer
          </button>
          <span style={{ marginLeft: "10px" }}>{dequeFeedback}</span>
          <DequeVisualizer
            onInsertFront={handleInsertFront}
            onInsertRear={handleInsertRear}
            onRemoveFront={handleRemoveFront}
            onRemoveRear={handleRemoveRear}
            deque={deque}
            lastDequeIndex={lastDequeIndex}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Array</h3>
          <p>
            Question: If you add the number 10 to the array, what will be the
            last element?
          </p>
          <input
            type="text"
            value={arrayAnswer}
            onChange={(e) => setArrayAnswer(e.target.value)}
            placeholder="Enter your answer"
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={() => {
              const result = handleAnswer("array", arrayAnswer);
              setArrayFeedback(result);
            }}
            style={buttonStyle}
          >
            Submit Answer
          </button>
          <span style={{ marginLeft: "10px" }}>{arrayFeedback}</span>
          <ArrayVisualizer
            onAdd={handleAddToArray}
            onRemove={handleRemoveFromArray}
            array={array}
            lastArrayIndex={lastArrayIndex}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Linked List</h3>
          <p>
            Question: If you remove the middle element from the list, what will
            the new middle element be?
          </p>
          <input
            type="text"
            value={listAnswer}
            onChange={(e) => setListAnswer(e.target.value)}
            placeholder="Enter your answer"
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={() => {
              const result = handleAnswer("list", listAnswer);
              setListFeedback(result);
            }}
            style={buttonStyle}
          >
            Submit Answer
          </button>
          <span style={{ marginLeft: "10px" }}>{listFeedback}</span>
          <ListVisualizer
            list={list}
            onRemoveMiddle={handleRemoveMiddleNode}
            onReset={handleResetList}
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingTask;
