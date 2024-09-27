export const stackQuestions = [
    {
      question: "1. Which principle does a stack follow?",
      options: [
        { answer: "FIFO", isCorrect: false },
        { answer: "LIFO", isCorrect: true },
        { answer: "LILO", isCorrect: false },
        { answer: "None of the above", isCorrect: false }
      ]
    },
    {
      question: "2. What is the time complexity for pushing an element onto the stack?",
      options: [
        { answer: "O(1)", isCorrect: true },
        { answer: "O(n)", isCorrect: false },
        { answer: "O(log n)", isCorrect: false },
        { answer: "O(n^2)", isCorrect: false }
      ]
    },
    {
      question: "3. What operation is used to remove the top element from a stack?",
      options: [
        { answer: "Pop", isCorrect: true },
        { answer: "Push", isCorrect: false },
        { answer: "Peek", isCorrect: false },
        { answer: "Add", isCorrect: false }
      ]
    },
    {
      question: "4. Which of the following is not a common use case for stacks?",
      options: [
        { answer: "Backtracking algorithms", isCorrect: false },
        { answer: "Memory management", isCorrect: false },
        { answer: "Function call management", isCorrect: false },
        { answer: "Sorting a list", isCorrect: true }
      ]
    },
    {
      question: "5. What is the time complexity for peeking at the top element of a stack?",
      options: [
        { answer: "O(1)", isCorrect: true },
        { answer: "O(n)", isCorrect: false },
        { answer: "O(log n)", isCorrect: false },
        { answer: "O(n^2)", isCorrect: false }
      ]
    },
    {
      question: "6. In which data structure is it impossible to access an element that is not on the top?",
      options: [
        { answer: "Queue", isCorrect: false },
        { answer: "Stack", isCorrect: true },
        { answer: "Array", isCorrect: false },
        { answer: "Linked List", isCorrect: false }
      ]
    },
    {
      question: "7. Which of the following is a method to check if a stack is empty?",
      options: [
        { answer: "isEmpty()", isCorrect: true },
        { answer: "size()", isCorrect: false },
        { answer: "isNull()", isCorrect: false },
        { answer: "contains()", isCorrect: false }
      ]
    },
    {
      question: "8. What will happen if you try to pop an element from an empty stack?",
      options: [
        { answer: "It will return null", isCorrect: false },
        { answer: "It will throw an error", isCorrect: true },
        { answer: "It will return undefined", isCorrect: false },
        { answer: "Nothing happens", isCorrect: false }
      ]
    },
    {
      question: "9. Which data structure uses the stack as its underlying mechanism?",
      options: [
        { answer: "Queue", isCorrect: false },
        { answer: "Priority Queue", isCorrect: false },
        { answer: "Recursive function calls", isCorrect: true },
        { answer: "Hash Table", isCorrect: false }
      ]
    },
    {
      question: "10. What is the maximum size of a stack defined with a fixed size?",
      options: [
        { answer: "Depends on the system memory", isCorrect: false },
        { answer: "Infinite", isCorrect: false },
        { answer: "Fixed at the time of creation", isCorrect: true },
        { answer: "Depends on the number of elements added", isCorrect: false }
      ]
    }
  ];

  export const listQuestions = [
    {
      question: "What is the main advantage of using a linked list over an array?",
      options: [
        { answer: "Dynamic size", isCorrect: true },
        { answer: "Faster access time", isCorrect: false },
        { answer: "Less memory usage", isCorrect: false },
        { answer: "Simplicity of implementation", isCorrect: false }
      ]
    },
    {
      question: "What is the time complexity for inserting an element at the head of a linked list?",
      options: [
        { answer: "O(1)", isCorrect: true },
        { answer: "O(n)", isCorrect: false },
        { answer: "O(log n)", isCorrect: false },
        { answer: "O(n^2)", isCorrect: false }
      ]
    },
    {
      question: "Which of the following is a characteristic of a doubly linked list?",
      options: [
        { answer: "Each node has a reference to the next node only", isCorrect: false },
        { answer: "Each node has a reference to both the next and previous nodes", isCorrect: true },
        { answer: "Nodes are stored in contiguous memory", isCorrect: false },
        { answer: "It does not allow null values", isCorrect: false }
      ]
    },
    {
      question: "What is the time complexity for accessing an element at a specific index in a linked list?",
      options: [
        { answer: "O(1)", isCorrect: false },
        { answer: "O(n)", isCorrect: true },
        { answer: "O(log n)", isCorrect: false },
        { answer: "O(n^2)", isCorrect: false }
      ]
    },
    {
      question: "Which operation requires O(n) time in a singly linked list?",
      options: [
        { answer: "Inserting at the head", isCorrect: false },
        { answer: "Inserting at the tail", isCorrect: true },
        { answer: "Removing the head", isCorrect: false },
        { answer: "Accessing the first element", isCorrect: false }
      ]
    }
  ];

  
  export const dequeQuestions = [
    {
      question: "What does the term 'deque' stand for?",
      options: [
        { answer: "Double-ended queue", isCorrect: true },
        { answer: "Dynamic queue", isCorrect: false },
        { answer: "Dequeued elements", isCorrect: false },
        { answer: "Deferred queue", isCorrect: false }
      ]
    },
    {
      question: "Which of the following operations can be performed in O(1) time on a deque?",
      options: [
        { answer: "Adding an element to the front", isCorrect: true },
        { answer: "Finding the size", isCorrect: false },
        { answer: "Accessing an element at a specific index", isCorrect: false },
        { answer: "Removing an element from the middle", isCorrect: false }
      ]
    },
    {
      question: "What is the main difference between a deque and a stack?",
      options: [
        { answer: "Deque allows insertion and deletion at both ends", isCorrect: true },
        { answer: "Deque is more memory efficient", isCorrect: false },
        { answer: "Stack allows access to all elements", isCorrect: false },
        { answer: "Deque is a type of stack", isCorrect: false }
      ]
    },
    {
      question: "What is the time complexity for removing an element from the back of a deque?",
      options: [
        { answer: "O(1)", isCorrect: true },
        { answer: "O(n)", isCorrect: false },
        { answer: "O(log n)", isCorrect: false },
        { answer: "O(n^2)", isCorrect: false }
      ]
    },
    {
      question: "In which scenario would you prefer using a deque over a queue?",
      options: [
        { answer: "When you need to access elements at both ends frequently", isCorrect: true },
        { answer: "When you have a fixed size", isCorrect: false },
        { answer: "When elements are processed in a strict FIFO manner", isCorrect: false },
        { answer: "When memory usage is a major concern", isCorrect: false }
      ]
    }
  ];
  
  export const arrayQuestions = [
    {
      question: "What is the time complexity for accessing an element in an array?",
      options: [
        { answer: "O(1)", isCorrect: true },
        { answer: "O(n)", isCorrect: false },
        { answer: "O(log n)", isCorrect: false },
        { answer: "O(n^2)", isCorrect: false }
      ]
    },
    {
      question: "What is a disadvantage of using arrays?",
      options: [
        { answer: "Dynamic sizing", isCorrect: false },
        { answer: "Contiguous memory allocation", isCorrect: false },
        { answer: "Fixed size", isCorrect: true },
        { answer: "Faster access time", isCorrect: false }
      ]
    },
    {
      question: "Which of the following operations has a time complexity of O(n) in arrays?",
      options: [
        { answer: "Insertion at the end", isCorrect: false },
        { answer: "Accessing an element", isCorrect: false },
        { answer: "Insertion at a specific index", isCorrect: true },
        { answer: "Accessing the last element", isCorrect: false }
      ]
    },
    {
      question: "What will happen if you try to access an index that is out of bounds in an array?",
      options: [
        { answer: "It will return null", isCorrect: false },
        { answer: "It will throw an error", isCorrect: true },
        { answer: "It will return undefined", isCorrect: false },
        { answer: "Nothing happens", isCorrect: false }
      ]
    },
    {
      question: "Which of the following best describes a multidimensional array?",
      options: [
        { answer: "An array of arrays", isCorrect: true },
        { answer: "An array with fixed dimensions", isCorrect: false },
        { answer: "An array that can hold different data types", isCorrect: false },
        { answer: "An array that grows dynamically", isCorrect: false }
      ]
    }
  ];
  
  export const queueQuestions = [
    {
      question: "What principle does a queue follow?",
      options: [
        { answer: "LIFO", isCorrect: false },
        { answer: "FIFO", isCorrect: true },
        { answer: "LILO", isCorrect: false },
        { answer: "None of the above", isCorrect: false }
      ]
    },
    {
      question: "What is the time complexity for enqueueing an element in a queue?",
      options: [
        { answer: "O(1)", isCorrect: true },
        { answer: "O(n)", isCorrect: false },
        { answer: "O(log n)", isCorrect: false },
        { answer: "O(n^2)", isCorrect: false }
      ]
    },
    {
      question: "Which operation removes an element from the front of a queue?",
      options: [
        { answer: "Enqueue", isCorrect: false },
        { answer: "Dequeue", isCorrect: true },
        { answer: "Peek", isCorrect: false },
        { answer: "Push", isCorrect: false }
      ]
    },
    {
      question: "What is a circular queue?",
      options: [
        { answer: "A queue that can grow in size indefinitely", isCorrect: false },
        { answer: "A queue that uses a fixed-size array and wraps around", isCorrect: true },
        { answer: "A queue that allows insertion at both ends", isCorrect: false },
        { answer: "A queue that has no front or rear", isCorrect: false }
      ]
    },
    {
      question: "Which of the following is a disadvantage of using a simple array-based queue?",
      options: [
        { answer: "It can grow dynamically", isCorrect: false },
        { answer: "It has fixed size leading to overflow", isCorrect: true },
        { answer: "It has slow access time", isCorrect: false },
        { answer: "It requires extra memory for pointers", isCorrect: false }
      ]
    }
  ];
  