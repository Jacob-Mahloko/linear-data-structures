export const applicationBasedQuestions = [
  {
    id: 1,
    category: "Stack",
    question:
      "Which data structure would be most suitable for implementing a browser history system where users can go back to the previous page and move forward?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack",
    explanation:
      "A stack is suitable because it follows the Last In First Out (LIFO) principle, which fits well for a browser history system where the last visited page should be the first to return when going back.",
  },
  {
    id: 2,
    category: "Queue",
    question:
      "Which data structure is ideal for implementing a task scheduler where tasks are executed in First In First Out (FIFO) order?",
    options: ["Stack", "Queue", "Array", "Hash Set"],
    correctAnswer: "Queue",
    explanation:
      "A queue is ideal because it follows the First In First Out (FIFO) principle, ensuring that tasks are executed in the order they were added.",
  },
  {
    id: 3,
    category: "Deque",
    question:
      "Which data structure would be best for a ticketing system where high-priority tickets are added to the front and low-priority tickets are added to the rear?",
    options: ["Queue", "Deque", "Array", "Stack"],
    correctAnswer: "Deque",
    explanation:
      "A deque (double-ended queue) is ideal because it allows insertion and deletion at both ends, supporting the addition of high-priority tickets at the front and low-priority tickets at the rear.",
  },
  {
    id: 4,
    category: "Array",
    question:
      "Which approach would be most efficient for finding duplicates in an unsorted array of integers?",
    options: [
      "Sorting the array and checking consecutive elements",
      "Using a hash set to track seen elements",
      "Using a stack to store elements",
      "Iterating through the array with two pointers",
    ],
    correctAnswer: "Using a hash set to track seen elements",
    explanation:
      "Using a hash set allows us to track the elements we've already encountered, making it efficient to check for duplicates without sorting the array.",
  },
  {
    id: 5,
    category: "List",
    question:
      "Which data structure would be most efficient for merging two sorted linked lists into a single sorted list?",
    options: ["Array", "Stack", "Linked List", "Queue"],
    correctAnswer: "Linked List",
    explanation:
      "A linked list is ideal because merging two sorted linked lists requires iterating through both lists and comparing their elements. Using linked lists avoids the overhead of resizing arrays.",
  },
];
