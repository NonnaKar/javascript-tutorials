// **********     ES6: Create Strings using Template Literals


// A new feature of ES6 is the template literal.
// This is a special type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

// Example 1

const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  // Template literal with multi-line and string interpolation
  const Greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
console.log(Greeting);

// Task:

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // change code below this line
  const resultDisplayArray = arr.map( failure=>  `<li class="text-warning">${failure}</li>`);
  
    // change code above this line
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`,
   *   `<li class="text-warning">linebreak</li>` ]
   **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);


// **********     ES6: Write Concise Object Literal Declarations Using Object Property Shorthand


// ES6 adds some nice support for easily defining object literals.

// Example 1

const getMousePosition1 = (x, y) => ({
    x: x,
    y: y
  });

// GetMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
// You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition2 = (x, y) => ({ x, y });

// Task:

const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,
      age,
      gender
    };
  };
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
  

