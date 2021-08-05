// **********     ES6: Use Destructuring Assignment to Extract Values from Objects


// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

// Example 1 

const user = { name: 'John Doe', age: 34 };
const { name, age } = user; //looks much cleaner and neat
console.log(user);

// Task:

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const { today,tomorrow} = HIGH_TEMPERATURES ;
console.log(today);
console.log(tomorrow);


// **********     ES6: Use Destructuring Assignment to Assign Variables from Objects


// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

// Example 1

const userTwo = { name: 'John Doe', age: 34 };
const { name: userTwoName, age: userTwoAge } = userTwo;
console.log(userTwoName);
console.log(userTwoAge);

// Task:

const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES1 ;
console.log(today);
console.log(tomorrow);


// **********     ES6: Use Destructuring Assignment to Assign Variables from Nested Objects


// You can use the same principles from the previous two lessons to destructure values from nested objects.

// Example 1

const student = {
    johnDoe: { 
      years: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

// Here's how to extract the values of object properties and assign them to variables with the same name:

const { johnDoe: { years, email }} = student;
console.log(student);

// And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { years: studentYears, email: studentEmail }} = student;
console.log(studentYears);
console.log(studentEmail);

// Task:

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  const { today: { low: lowToday1, high: highToday1 } } = LOCAL_FORECAST;
  
console.log(lowToday1); 
console.log(highToday1); 
  

// **********     ES6: Use Destructuring Assignment to Assign Variables from Arrays


// Destructuring an array lets us do exactly that:

// Example 1

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

// The variable a is assigned the first value of the array, and b is assigned the second value of the array.
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

// Example 2

const [c, d,,, e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, e); 

// Task:

let g = 8, f = 6;
[g, f] = [f, g];
console.log(g); // should be 6
console.log(f); // should be 8


// **********     ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements


// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
// The result is similar to Array.prototype.slice(), as shown below:

// Example 2

const [z, x, ...numbers] = [1, 2, 3, 4, 5, 7];
console.log(z, x); // 1, 2
console.log(numbers); // [3, 4, 5, 7]

// Task:

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";  
  const [a, b, ...arrOne]  = list;
  return arrOne;
}
const arrOne = removeFirstTwo(source);
console.log(arrOne);
console.log(source);


// **********     ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters


// In some cases, you can destructure the object in a function argument itself.

// Examples 1

const profileUpdate1 = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables
  }

// Example 2

const profileUpdate2 = ({ name, age, nationality, location }) => {
    /* do something with these fields */
  }

//   This removes some extra lines and makes our code look neat.
// This has the added benefit of not having to manipulate an entire object in a function — only the fields that are needed are copied inside the function.

// Task:

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
    const half = ({ max, min }) => (max + min) / 2.0;
    
console.log(stats);
console.log(half(stats));
  