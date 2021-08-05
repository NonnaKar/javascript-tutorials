// **********     ES6: Set Default Parameters for Your Functions


// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Example 1

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting("Nonna"));
console.log(greeting("Vija"));
console.log(greeting()); // Hello Anonymous

// The default parameter kicks in when the argument is not specified (it is undefined). 
// As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. 
// You can add default values for as many parameters as you want.

// Example 2

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6


// **********     ES6: Use the Rest Parameter with Function Parameters


// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
// With the rest parameter, you can create functions that take a variable number of arguments.
// These arguments are stored in an array that can be accessed later from inside the function.

// Example 1

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

// Task:

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
console.log(sum(1, 2, 3)); // 6


// **********     ES6: Use the Spread Operator to Evaluate Arrays In-Place


// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
// The ES5 code below uses apply() to compute the maximum value in an array:
  
// Example 1

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
console.log(maximus);

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
// Math.max() expects comma-separated arguments, but not an array. 
// The spread operator makes this syntax much better to read and maintain.

// Example 2

const arrTwo = [6, 89, 3, 45];
const maximusTwo = Math.max(...arr); // returns 89
console.log(maximusTwo);

// Task:

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);
