// **********     ES6: Use Arrow Functions to Write Concise Anonymous Functions


// Example 1

const myFunc = function() {
    const myVar = "value";
    return myVar;
  }

//   Example 2

const myFuncOne = () => {
    const myVar = "value";
    return myVar;
  }

//   Example 3

const myFuncTwo = () => "value";

// Task:

const magic = () => {
    "use strict";
    return new Date();
  };

console.log(magic); 


// **********     ES6: Write Arrow Functions with Parameters


// Just like a regular function, you can pass arguments into an arrow function.

// Example 1
// const doubler = (item) => item * 2;

// If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

// Example 2
// const doubler = item => item * 2;

// It is possible to pass more than one argument into an arrow function.

// Example 3
// const multiplier = (item, multi) => item * multi;

// Task:

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

