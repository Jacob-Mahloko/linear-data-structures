import React from 'react';
import GenericTheorySection from './GenericTheorySection';

const LinkedListTheory = () => {
  const title = "Theory of Linked Lists";
  const introduction = "A linked list is a linear data structure in which elements are stored in nodes, where each node contains data and a reference to the next node...";
  const outcomes = [
    "explain the basic operations performed on linked lists: insertion, deletion, traversal and search.",
    "explain how nodes in a linked list are connected through pointers or references.",
    "show how data is stored and accessed in a linked list.",
    "implement a linked list in a programming language using classes or structures.",
    "use linked lists to solve practical problems.",
    "discuss why a linked list would be the best choice over other data structures for a specific problem."
  ];
  const characteristics = [
    "Dynamic Size: The size of a linked list can grow or shrink as needed.",
    "Non-contiguous Memory Allocation: Nodes can be stored anywhere in memory.",
    "Sequential Access: Elements must be accessed in sequence."
  ];
  const types = [
    "Singly Linked List: Each node contains data and a reference to the next node.",
    "Doubly Linked List: Each node contains data, a reference to the next node, and a reference to the previous node.",
    "Circular Linked List: The last node points back to the first node."
  ];
  const operations = [
    "Insertion: Adding a new node at the beginning, end, or any position.",
    "Deletion: Removing a node from the beginning, end, or any position.",
    "Traversal: Accessing each node in the list sequentially.",
    "Search: Finding a node with a specific value."
  ];
  const advantages = [
    "Dynamic sizing allows for efficient memory usage.",
    "Efficient insertions and deletions, especially in the middle of the list.",
    "No overflow in case of linked lists."
  ];
  const disadvantages = [
    "More memory usage due to storing pointers.",
    "Slower access time compared to arrays.",
    "More complex implementation."
  ];
  const applications = [
    "Implementing stacks and queues.",
    "Managing dynamic collections of data.",
    "Used in scenarios requiring frequent insertions and deletions."
  ];
  const conclusion = "Linked lists are a fundamental data structure that provides flexibility in managing collections of data...";

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

export default LinkedListTheory;
