import React from 'react';
import GenericTheorySection from './GenericTheorySection';

const DequeTheory = () => {
  const title = "Theory of Deques";
  const introduction = "A double-ended queue (deque) is a linear data structure that allows the insertion and deletion of elements from both ends...";
  const characteristics = [
    "Dynamic Size: Deques can grow and shrink as needed.",
    "Two Ends: Elements can be added and removed from both the front and rear.",
    "Versatile Access: Provides functionality of both queues and stacks."
  ];
  const types = [
    "Input-Restricted Deque: Insertion allowed only at one end.",
    "Output-Restricted Deque: Deletion allowed only at one end."
  ];
  const operations = [
    "AddFirst: Adding an element to the front of the deque.",
    "AddLast: Adding an element to the rear of the deque.",
    "RemoveFirst: Removing an element from the front of the deque.",
    "RemoveLast: Removing an element from the rear of the deque.",
    "PeekFirst: Retrieving the front element without removing it.",
    "PeekLast: Retrieving the rear element without removing it."
  ];
  const advantages = [
    "More flexible than a standard queue due to access from both ends.",
    "Can be used to implement other data structures."
  ];
  const disadvantages = [
    "More complex to implement compared to standard queues.",
    "Can lead to higher memory overhead due to the need for two pointers."
  ];
  const applications = [
    "Implementing palindromes and caching mechanisms.",
    "Managing tasks in simulations.",
    "Undo functionality in applications."
  ];
  const conclusion = "Deques are a versatile data structure that provides greater flexibility than queues...";

  return (
    <GenericTheorySection
      title={title}
      introduction={introduction}
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

export default DequeTheory;
