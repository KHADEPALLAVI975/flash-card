export const flashCards = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned. It 'closes over' the variables from the outer scope."
  },
  {
    id: 2,
    question: "What is the difference between 'let', 'const', and 'var'?",
    answer: "'var' is function-scoped and can be redeclared. 'let' and 'const' are block-scoped. 'let' can be reassigned but not redeclared. 'const' cannot be reassigned or redeclared."
  },
  {
    id: 3,
    question: "What is the 'this' keyword in JavaScript?",
    answer: "'this' refers to the object that is currently executing the function. Its value depends on how the function is called: global object (default), object method, constructor, or explicitly bound."
  },
  {
    id: 4,
    question: "What is a Promise in JavaScript?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected."
  },
  {
    id: 5,
    question: "What is the difference between '==' and '==='?",
    answer: "'==' performs type coercion before comparison, while '===' performs strict comparison without type coercion. '===' is generally preferred for more predictable behavior."
  },
  {
    id: 6,
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation, before code execution."
  },
  {
    id: 7,
    question: "What is the difference between 'null' and 'undefined'?",
    answer: "'undefined' means a variable has been declared but not assigned a value. 'null' is an assignment value that represents no value or empty value."
  },
  {
    id: 8,
    question: "What is an arrow function?",
    answer: "Arrow functions are a shorter syntax for writing function expressions. They don't have their own 'this', 'arguments', 'super', or 'new.target' bindings."
  },
  {
    id: 9,
    question: "What is the spread operator (...) in JavaScript?",
    answer: "The spread operator allows an iterable to be expanded in places where zero or more arguments or elements are expected. It can be used for arrays, objects, and function calls."
  },
  {
    id: 10,
    question: "What is destructuring in JavaScript?",
    answer: "Destructuring is a JavaScript expression that allows you to extract values from arrays or properties from objects into distinct variables."
  }
];
