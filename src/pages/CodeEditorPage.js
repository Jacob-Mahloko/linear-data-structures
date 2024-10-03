// src/pages/CodeEditorPage.js
import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import axios from 'axios';
import '../styles/CodeEditor.css'; // Add some custom styling

const CodeEditorPage = () => {
  // const [code, setCode] = useState('// Write your C++ code here\n#include <iostream>\nint main() { std::cout << "Hello World!"; return 0; }');
  
  // const [code, setCode] = useState('// Write your linkedlist.cpp code here ');
  const [code, setCode] = useState(`#include "linkedlist.h"

    /**
     * @brief LinkedListIterator::operator*
     * @return Return a reference to the thing in the link that we're pointing to
     */
    Thing &LinkedListIterator::operator*()
    {
       
    }
    
    /**
     * @brief LinkedListIterator::operator++
     * Make the current iterator point to the next link in the list.
     * @return Return a reference to this object.
     */
    LinkedListIterator &LinkedListIterator::operator++()
    {
       
    }
    
    /**
     * @brief LinkedList::LinkedList
     * Already correct as head is set to nullptr in the header file.
     */
    LinkedList::LinkedList()
    {
        // This is already correct.
    }
    
    /**
     * @brief LinkedList::~LinkedList
     * Free every link in the list. Do this function last.
     */
    LinkedList::~LinkedList()
    {
        // Consider using functions that already exist.
    }
    
    /**
     * @brief LinkedList::push_front
     * @param t
     * Push t to the front of the list
     */
    void LinkedList::push_front(Thing t)
    {
       
    }
    
    /**
     * @brief LinkedList::pop_front
     * Remove the front item in the list
     */
    void LinkedList::pop_front()
    {
        
    }
    
    /**
     * @brief LinkedList::push_back
     * @param t
     * Add t to the back of the list
     */
    void LinkedList::push_back(Thing t)
    {
       
    }
    
    /**
     * @brief LinkedList::pop_back
     * Remove the last link in the list
     */
    void LinkedList::pop_back()
    {
       
    }
    
    /**
     * @brief LinkedList::size
     * @return number of items in the list
     */
    size_t LinkedList::size()
    {
        
    }
    
    /**
     * @brief LinkedList::front
     * @return a reference to the first item in the list
     */
    Thing &LinkedList::front()
    {
        
    }
    
    /**
     * @brief LinkedList::back
     * @return a reference to the last item in the list
     */
    Thing &LinkedList::back()
    {
        
    }
    
    /**
     * @brief LinkedList::get_link
     * @param i
     * @return A pointer to the ith link
     * @throws std::out_of_range("i out of bounds") - try to do this without calling size()
     */
    Link *LinkedList::get_link(int i)
    {
       
    }
    
    /**
     * @brief LinkedList::at
     * @param i
     * @return A reference to the thing at index i
     * @throws std::out_of_range("i out of bounds") - try to do this without calling size()
     */
    Thing &LinkedList::at(int i)
    {
       
    }
    
    /**
     * @brief LinkedList::begin
     * @return a LinkedListIterator object referencing the first item
     */
    LinkedListIterator LinkedList::begin()
    {
        // Remember to implement both LinkedListIterator::operator* and
        // LinkedListIterator::operator++ in order to pass the test cases.
        // They are at the top of this file.
       
    }
    
    /**
     * @brief LinkedList::end
     * @return a LinkedListIterator representing one past the last item
     * Let this be a LinkedListIterator with ptr equal to the nullptr
     */
    LinkedListIterator LinkedList::end()
    {
      
    }
    
    /**
     * @brief LinkedList::copy
     * @return A pointer to a copy of the list
     * Allocate a new list on the heap, then add all the items to the list.
     * Do not allocate the list on the stack, because it would be destroyed when the function ends.
     *  - See the C++ Concepts PDF example.
     */
    LinkedList *LinkedList::copy()
    {
        
    }
    
    /**
     * @brief LinkedList::reverse
     * Reverse the list.
     *  half marks: all the values are reversed
     *  remaining marks: list is reversed by changing link pointers *only*
     *    - if it was expensive to copy Thing objects, then reversing the values would take
     *       a lot of time. If you can do it by only changing the link pointers, then it will
     *       always be fast no matter how big the thing objects are.
     *  You can do this in O(n^2) time quite easily. Try to think about how you could do this in O(n) time.
     */
    void LinkedList::reverse()
    {
       
    }
    `);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = async () => {
    try {
      const response = await axios.post('http://localhost:3001/run-code', { code });
      setOutput(response.data.output);
      setError('');
    } catch (error) {
      console.error('Error running cide:', error.response?.data || error.message);
      setError('Error running code: ' + (error.response?.data?.error || error.message));
      setOutput('');
    }
  };

  return (
    <div className="code-editor-container">
      <h1>C++ Code Editor</h1>
      <Editor
        height="400px"
        defaultLanguage="cpp"
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
      />
      <button className="run-button" onClick={handleRunCode}>Run Code</button>
      <div className="output-container">
        <h2>Output:</h2>
        <pre>{output}</pre>
      </div>

    {/* {output && <div><h2>Output:</h2><pre>{output}</pre></div>}
    {error && <div><h2>Error:</h2><pre>{error}</pre></div>} */}
    </div>
  );
};

export default CodeEditorPage;
