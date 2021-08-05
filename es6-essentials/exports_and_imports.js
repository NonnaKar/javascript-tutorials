// **********     ES6: Use export to Share a Code Block


// Imagine a file called math_functions.js that contains several functions related to mathematical operations. 
// One of them is stored in a variable, add, that takes in two numbers and returns their sum. 
// You want to use this function in several different JavaScript files. 
// In order to share it with these other files, you first need to export it.

// Example 1

export const add = (x, y) => {
    return x + y;
  }

// The above is a common way to export a single function, but you can achieve the same thing like this:

// Example 2

const add = (x, y) => {
    return x + y;
  }
  
  export { add };

// When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 
// You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

// Example 3

export { add, subtract };

// Task:

const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
export {uppercaseString, lowercaseString};

// Task:

export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }


// **********     ES6: Reuse Javascript Code Using import


// 'import' allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

// Example 1

import { add } from './math_functions.js';

// Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. 

// You can import more than one item from the file by adding them in the import statement like this:

// Example 2

import { add, subtract } from './math_functions.js';

// Task:

import {uppercaseString, lowercaseString} from './string_functions.js'
uppercaseString("hello");
lowercaseString("WORLD!");


// **********     ES6: Use * to Import Everything from a File


// Suppose you have a file and you wish to import all of its contents into the current file. 
// This can be done with the 'import * as' syntax. 

// Example 1 

import * as myMathModule from "./math_functions.js";

// Here's how you can use the add and subtract functions that were imported:

// Example 2

myMathModule.add(2,3);
myMathModule.subtract(5,3);

// Task:

import * as stringFunctions from "./string_functions.js"
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


// **********     ES6: Create an Export Fallback with export default


// There is another export syntax you need to know, known as export default. 
// Usually you will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.

// Example 1

// named function
export default function add(x, y) {
    return x + y;
  }
  
  // anonymous function
  export default function(x, y) {
    return x + y;
  }

//  Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. 
// Additionally, you cannot use export default with var, let, or const


// **********     ES6: Import a Default Export


// In the last challenge, you learned about 'export default' and its uses. 
// To import a default export, you need to use a different 'import' syntax. 
// In the following example, 'add' is the default export of the math_functions.js file. 

// Example 1

import add from "./math_functions.js";

// The syntax differs in one key place. 
// The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. 
// You can use any name here when importing a default.

// Task:

import subtract from "./math_functions.js"
subtract(7,4);
