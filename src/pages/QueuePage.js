import React, {useState} from 'react';
import QueueVisualizer from '../components/visualisers/QueueVisualiser';
import Quiz from '../components/Quiz';
import QueueTheory from '../components/theory/QueueTheory';
import { queueQuestions } from '../components/questions/Questions';

const QueuePage = () => {
    const [showVisualizer, setShowVisualizer] = useState(true);

  return (
    <div style={{margin: "40px 50px"}}>
      <h1>Queue Data Structure</h1>
      <QueueTheory/>
      {showVisualizer ? <QueueVisualizer /> : <Quiz questions={queueQuestions} />}
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <button 
          style={{
            flex: 1,
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontSize: '1rem'
          }} 
          onClick={() => setShowVisualizer(true)}
        >
          Demo
        </button>
        <button 
          style={{
            flex: 1,
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontSize: '1rem'
          }} 
          onClick={() => setShowVisualizer(false)}
        >
          Quiz
        </button>
      </div>

    </div>
  );
};

export default QueuePage;
