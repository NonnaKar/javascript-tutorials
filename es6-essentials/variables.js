// **********     ES6: Explore Differences Between the var and let Keywords


var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'

let camperTwo = 'James';
// let camperTwo = 'David'; // throws an error
console.log(camperTwo);

// Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. 

// Task:

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
console.log(quote);


// **********     ES6: Compare Scopes of the var and let Keywords


// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
// The let keyword behaves similarly, but with some extra features. 
// When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

// Example 1

var numArrayOne = [];
for (var i = 0; i < 3; i++) {
  numArrayOne.push(i);
}
console.log(numArrayOne);
console.log(i);

// Example 2

var numArrayTwo = [];
var i;
for (i = 0; i < 3; i++) {
  numArrayTwo.push(i);
}
console.log(numArrayTwo);
console.log(i);

// Example 3

var printNum;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNum = function() {
      return i;
    };
  }
}
console.log(printNum());

// Example 4

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);

// Task:

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
console.log(i); 


// **********     ES6: Declare a Read-Only Variable with the const Keyword


// Example 1

"use strict";
const FAV_PET = "Cats";
// FAV_PET = "Dogs"; // returns error

// Task:

function printManyTimes(str) {
    "use strict";
    
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
    
  }
  printManyTimes("freeCodeCamp");
console.log();


// **********     ES6: Mutate an Array Declared with const


// Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. 
// Only in that case, they use let. However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. 
// Using the const declaration only prevents reassignment of the variable identifier.

// Example 1

"use strict";
const s = [5, 6, 7];
// s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

// Task:

const m = [5, 7, 2];
function editInPlace() {
  'use strict';
  m[0] = 2;
  m[1] = 5;
  m[2] = 7;
  }
editInPlace(); 
console.log(m);