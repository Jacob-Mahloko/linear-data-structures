import React from 'react';
import GenericTheorySection from './GenericTheorySection';

const QueueTheory = () => {
  const title = "Theory of Queues";
  const introduction = "A queue is a linear data structure that follows the First In First Out (FIFO) principle...";
  const outcomes = [
    "explain the basic operations performed on a queue: enqueue, dequeue, peek.",
    "describe how data is added and removed from a queue.",
    "use queues to solve practical problems, such as scheduling",
    "compare the different queues and their use cases",
    "discuss the efficiency of different queue implementations in different scenarios."
  ];
  const characteristics = [
    "FIFO Order: The first element added is the first to be removed.",
    "Dynamic Size: Queues can grow and shrink as needed.",
    "Two Ends: Elements are added at the rear and removed from the front."
  ];
  const types = [
    "Simple Queue: Basic queue allowing insertions at the rear and deletions from the front.",
    "Circular Queue: Efficient implementation using a circular array.",
    "Priority Queue: Elements are served based on priority rather than order.",
    "Double-Ended Queue (Deque): Allows insertions and deletions at both ends."
  ];
  const operations = [
    "Enqueue: Adding an element to the rear of the queue.",
    "Dequeue: Removing an element from the front of the queue.",
    "Peek/Front: Retrieving the front element without removing it.",
    "IsEmpty: Checking if the queue is empty."
  ];
  const advantages = [
    "Efficient for scheduling and managing resources.",
    "Useful in breadth-first search (BFS) algorithms.",
    "Implements a fair waiting mechanism for processes."
  ];
  const disadvantages = [
    "Limited access: Elements can only be added or removed from specific ends.",
    "Can lead to overflow in fixed-size implementations."
  ];
  const applications = [
    "Managing tasks in print queues.",
    "Implementing breadth-first search in graph algorithms.",
    "Handling requests in web servers."
  ];
  const conclusion = "Queues are essential for scenarios where order of processing matters...";

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

export default QueueTheory;
