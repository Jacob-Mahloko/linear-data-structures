import React from 'react';
import GenericTheorySection from './GenericTheorySection';

const StackTheory = () => {
  const title = "Theory of Stacks";
  const introduction = "A stack is a linear data structure that follows the Last In First Out (LIFO) principle...";
  const outcomes = [
    "explain the basic operations performed on a stack: push, pop and peek.",
    "explain the LIFO principle",
    "summarize the advantages and disadvantages of using stacks.",
    "use stack operations to solve practical problems like reversing a string.",
    "justify the use of a stack over other data structures for certain use cases"
  ];
  const characteristics = [
    "Fixed Size: The size of a stack is defined at the time of creation.",
    "LIFO Order: The last element added to the stack is the first to be removed.",
    "Dynamic Behavior: Stacks can grow and shrink in size as needed."
  ];
  const types = [
    "Array-based Stacks: Implemented using arrays.",
    "Linked List Stacks: Implemented using linked lists."
  ];
  const operations = [
    "Push: Adding an element to the top of the stack.",
    "Pop: Removing the top element from the stack.",
    "Peek: Retrieving the top element without removing it."
  ];
  const advantages = [
    "Simple and easy to implement.",
    "Used in function calls, expression evaluation, and backtracking algorithms."
  ];
  const disadvantages = [
    "Limited access: Only the top element can be accessed.",
    "Fixed size in array-based implementation may lead to overflow."
  ];
  const applications = [
    "Function call management in programming languages.",
    "Undo mechanisms in text editors.",
    "Expression evaluation and syntax parsing."
  ];
  const conclusion = "Stacks are vital in many applications and algorithms due to their LIFO behavior...";

  return (
    <GenericTheorySection
      title={title}
      introduction={introduction}
      outcomes={outcomes}
      characteristics={characteristics}
      types={types}
      operations={operations}
      advantages={advantages}
      disadvantages={disadvantages}
      applications={applications}
      conclusion={conclusion}
    />
  );
};

export default StackTheory;
