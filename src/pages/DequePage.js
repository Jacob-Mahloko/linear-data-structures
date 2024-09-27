import React ,{useState}from 'react';
import DequeVisualizer from '../components/visualisers/DequeVisualiser';
import Quiz from '../components/Quiz';
import DequeTheory from '../components/theory/DequeTheory';
import { dequeQuestions } from '../components/questions/Questions';

const DequePage = () => {
    const [showVisualizer, setShowVisualizer] = useState(true);
  return (
    <div  style={{margin: "40px 50px"}}>
      <h1>Deque Data Structure</h1>
      <DequeTheory/>
      {showVisualizer ? <DequeVisualizer /> : <Quiz questions={dequeQuestions} />}
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

export default DequePage;
