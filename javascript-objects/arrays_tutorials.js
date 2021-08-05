// **********          Basic Data Structures: Use an Array to Store a Collection of Data


// The below is an example of the simplest implementation of an array data structure. 
// This is known as a 'one-dimensional array', meaning it only has one level, or that it does not have any other arrays nested within it. 
// Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:

// Example 1

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7

// All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. 
// A more complex implementation of an array can be seen below. 
// This is known as a 'multi-dimensional array', or an array that contains other arrays.

// Example 2

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

// Task:

let yourArray = ['name', 5, true, false, null ];
console.log(yourArray.length);


// **********          Basic Data Structures: Access an Array's Contents Using Bracket Notation


// The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. 

// Example 1

let ourArray = ["a", "b", "c"];

// In an array, each array item has an index. 
// This index doubles as the position of that item in the array, and how you reference it. 
// However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. 
// In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. 
// This is known as bracket notation. 
// For example, if we want to retrieve the "a" from ourArray and assign it to a variable, we can do so with the following code:

// Example 2

let ourVariable = ourArray[0];
// ourVariable equals "a"

// In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

// Example 3

ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];

// Using bracket notation, we have now reset the item at index 1 from "b", to "not b anymore".

// Task:

let myArray = ["a", "b", "c", "d"];
myArray[1] = "apple";
console.log(myArray);


// **********          Basic Data Structures: Add Items to an Array with push() and unshift()


// An array's length, like the data types it can contain, is not fixed. 
// Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable. 
// In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

// Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning.

// Example 1

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
// Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

// Task:

function mixedNumbers(arr) {
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    return arr;
  }
console.log(mixedNumbers(["IV", 5, "six"]));


// **********          Basic Data Structures: Remove Items from an Array with pop() and shift()


// Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). 
// Instead of adding, pop() removes an element from the end of an array, while shift() removes an element from the beginning. 
// The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

// Example 1

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']

// We can also return the value of the removed element with either method like this:

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []

// Task:

function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
console.log(popShift(['challenge', 'is', 'not', 'complete']));
  

// **********          Basic Data Structures: Remove Items Using splice()


// Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? 
// Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

// splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. 
// The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. 
// And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. 
// splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.

// Example 1

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

// Example 2

let array1 = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array1.splice(3, 2);
// newArray equals ['really', 'happy']

// Task:

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);


// **********          Basic Data Structures: Add Items Using splice()


// Remember in the last challenge we mentioned that splice() can take up to three parameters? 
// Well, you can use the third parameter, comprised of one or more element(s), to add to the array. 
// This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

// Example 1

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]

// Here we begin with an array of numbers. 
// We then pass the following to splice(). 
// The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the elements (13, 14) to be inserted at that same index. 
// Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.

// Task:

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurqoise",
    "FireBrick"
  ])
);


// **********          Basic Data Structures: Copy Array Items Using slice()


// The next method we will cover is slice(). 
// slice(), rather than modifying an array, copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched. 
// slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). 

// Example 1

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// Task:

function forecast(arr) {
return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// **********          Basic Data Structures: Copy an Array with the Spread Operator


// While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. 
// The spread syntax simply looks like this: ...

// Example 1

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

// Task:

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));


// **********          Basic Data Structures: Combine Arrays with the Spread Operator


// Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. 
// With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. 
// Spread syntax makes the following operation extremely simple. 

// Example 1

let thisArray1 = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray1 = ['basil', 'cilantro', ...thisArray1, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

// Task:

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
console.log(spreadOut());


// **********          Basic Data Structures: Check For The Presence of an Element With indexOf()


// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. 
// Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. 
// indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

// Example 1

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates')); // returns -1
console.log(fruits.indexOf('oranges')); // returns 2
console.log(fruits.indexOf('pears')); // returns 1, the first index at which the element exists

// Task:

function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log([3, 5, 9, 125, 45, 2], 125);

// demonstrates how the problem can be solved using the ? : (conditional) operator.

// Task:

function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// Task:

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(["onions", "squash", "shallots"], "onions");


// **********          Basic Data Structures: Iterate Through All an Array's Items Using For Loops


// Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. 
// JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

// Example 1 

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]

// Task:

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]); 
    }
  }
  return newArr;
}
console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));


// **********          Basic Data Structures: Create complex multi-dimensional arrays


// Arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. 
// In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. 

// Example 1

let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?

// And now that we know where that piece of data is, we can reset it if we need to:

// Example 2

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still

// Task:

let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
];

