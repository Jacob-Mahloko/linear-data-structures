import React,{useState} from 'react';
import ListVisualizer from '../components/visualisers/ListVisualiser';
import Quiz from '../components/Quiz';
import LinkedListTheory from '../components/theory/LinkedListTheory';
import { listQuestions } from '../components/questions/Questions';

const ListPage = () => {
    const [showVisualizer, setShowVisualizer] = useState(true);

  return (
    <div style={{margin: "40px 50px"}}>
      <h1>List Data Structure</h1>
      <LinkedListTheory/>

        {showVisualizer ? <ListVisualizer /> : <Quiz questions={listQuestions} />}
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

export default ListPage;
