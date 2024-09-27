import React from 'react';
import GenericTheorySection from './GenericTheorySection';

const ArrayTheory = () => {
  const title = "Theory of Arrays";
  const introduction = "An array is a fundamental data structure that holds a collection of elements...";
  const characteristics = [
    "Fixed Size: The size of an array is defined at the time of creation.",
    "Contiguous Memory Allocation: Arrays are stored in contiguous memory locations.",
    "Index-Based Access: Each element can be accessed directly using its index.",
    "Homogeneous Elements: Typically, arrays store elements of the same data type."
  ];
  const types = [
    "One-Dimensional Arrays: The simplest form of an array.",
    "Multi-Dimensional Arrays: Arrays with more than one dimension, such as matrices.",
    "Dynamic Arrays: Arrays that can change in size during runtime."
  ];
  const operations = [
    "Insertion: Adding an element to an array.",
    "Deletion: Removing an element from an array.",
    "Accessing Elements: Accessing an element by its index is a constant time operation.",
    "Searching: Finding an element can be done using linear or binary search.",
    "Traversal: Iterating over the elements of an array."
  ];
  const advantages = [
    "Fast access to elements.",
    "Memory efficiency through contiguous allocation.",
    "Simplicity in implementation and use."
  ];
  const disadvantages = [
    "Fixed size, limiting flexibility.",
    "Inefficient insertions and deletions in the middle.",
    "Typically stores elements of a single data type."
  ];
  const applications = [
    "Data storage for lists, matrices, and tables.",
    "Image processing with multi-dimensional arrays.",
    "Game development for representing boards and inventories."
  ];
  const conclusion = "Arrays are a fundamental data structure that provides efficient access...";

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

export default ArrayTheory;
