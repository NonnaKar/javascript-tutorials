// **********          Functional Programming: Learn About Functional Programming


// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

// INPUT -> PROCESS -> OUTPUT

// Functional programming is about:

// 1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
// 2) Pure functions - the same input always gives the same output
// 3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

// Task:

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => "greenTea";

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);


// **********          Functional Programming: Understand Functional Programming Terminology


// Let's cover some functional terminology:

// 'Callbacks' are the functions that are slipped or passed into another function to decide the invocation of that function. 
// You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called 'first class functions'. 
// In JavaScript, all functions are first class functions.

// The functions that take a function as an argument, or return a function as a return value are called 'higher order functions'.

// When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a 'lambda'.

// Task:

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea1 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


// **********          Functional Programming: Understand the Hazards of Using Imperative Code


// In English (and many other languages), the imperative tense is used to give commands. 
// Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

// Often the statements change the state of the program, like updating global variables. 
// A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

// In contrast, functional programming is a form of declarative programming. 
// You tell the computer what you want done by calling a method or function.

// JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. 
// For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. 
// This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

// Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. 
// Let's try to model this using some simple object-oriented code.

// A Window object is made up of tabs, and you usually have more than one Window open. 
// The titles of each open site in each Window object is held in an array. 
// After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. 
// Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

// The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). 
// The array tabs is part of the Window object that stores the name of the open pages.

// Task:

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // we keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
  
    // Only change code below this line

    // using slice(). This does not create side effects and should be preferred over splice().
  
    var tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
    var tabsAfterIndex = this.tabs.slice(index+1);
  ; // get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  var finalTabs = socialWindow
                      .tabOpen() // Open a new tab for cat memes
                      .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                      .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


// **********          Functional Programming: Avoid Mutations and Side Effects Using Functional Programming


// Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
// A function, ideally, should be a pure function, meaning that it does not cause any side effects.

// Task:

var fixedValue = 4;

function incrementer () {
return fixedValue +1;
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4


// **********          Functional Programming: Pass Arguments to Avoid External Dependence in a Function


// We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

// Another principle of functional programming is to always declare your dependencies explicitly. 
// This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

// There are several good consequences from this principle. 
// The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

// This can give you more confidence when you alter, remove, or add new code. 
// You would know what you can or cannot change and you can see where the potential traps are.

// Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

// Task:

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer(value) {
  return value + 1;

  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4


// **********          Functional Programming: Refactor Global Variables Out of Functions


// So far, we have seen two distinct principles for functional programming:

// 1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

// 2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

// Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

// Task:

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


// **********          Functional Programming: Use the map Method to Extract Data from an Array


// In this exercise we are looking at Array.prototype.map(), or more simply map.

// The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. 
// It does this without mutating the original array.

// When the callback is used, it is passed three arguments. 
// The first argument is the current element being processed. 
// The second is the index of that element and the third is the array upon which the map method was called.

// See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. 
// For simplicity, the example only uses the first argument of the callback.

// Example 1

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]

// Task:

// the global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Add your code below this line

const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

// Add your code above this line

console.log(JSON.stringify(ratings));


// **********          Functional Programming: Implement map on a Prototype


// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. 
// It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. 
// Plus, it takes another function as its argument.

// It would teach us a lot about map to try to implement a version of it that behaves exactly like the Array.prototype.map() with a for loop or Array.prototype.forEach().

// Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

// Task:

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});


// **********          Functional Programming: Use the filter Method to Extract Data from an Array


// Another useful array function is Array.prototype.filter(), or simply filter().

// 'filter' calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. 
// In other words, it filters the array, based on the function passed to it. 
// Like map, it does this without needing to modify the original array.

// The callback function accepts three arguments. 
// The first argument is the current element being processed. 
// The second is the index of that element and the third is the array upon which the filter method was called.

// See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. 
// For simplicity, the example only uses the first argument of the callback.

// Example 1

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

// Task:

// The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

const filteredList = watchList
.map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
});


// **********          Functional Programming: Implement the filter Method on a Prototype


// It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like Array.prototype.filter(). 
// It can use either a for loop or Array.prototype.forEach().
// Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

// Task 1:

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Add your code above this line
  return newArray;
};

// Task 2:

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


// **********          Functional Programming: Return Part of an Array Using the slice Method


// The slice method returns a copy of certain elements of an array. 
// It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). 
// If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. 
// The slice method does not mutate the original array, but returns a new one.

// Example 1

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]

// Task:

function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line

  return anim.slice(beginSlice, endSlice);

  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


// **********          Functional Programming: Remove Elements from an Array Using slice Instead of splice


// A common pattern while working with arrays is when you want to remove items and keep the rest of the array. 
// JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. 
// If the second argument is not provided, the default is to remove items through the end.
// However, the splice method mutates the original array it is called on.

// Example 

var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]

// Task:

function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.slice(0,3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);


// **********          Functional Programming: Combine Two Arrays Using the concat Method


// Concatenation means to join items end to end. 
// JavaScript offers the concat method for both strings and arrays that work in the same way. 
// For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. 
// It returns a new array and does not mutate either of the original arrays.

// Example 

[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]

// Task:

function nonMutatingConcat(original, attach) {
  // Add your code below this line

  return original.concat(attach);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);


// **********          Functional Programming: Add Elements to the End of an Array Using concat Instead of push


// The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. 
// Compare concat to the push method. 
// Push adds an item to the end of the same array it is called on, which mutates that array. 

// Example 1

var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way

// Concat offers a way to add new items to the end of an array without any mutating side effects.

// Task:

function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.concat(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);


// **********          Functional Programming: Use the reduce Method to Analyze Data


// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. 
// You can solve almost any array processing problem using the reduce method.

// The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. 
// The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). 
// This is achieved via a callback function that is called on each iteration.

// Example 1

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64

// Example 2

// In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

// Task:

// the global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList){
  // Add your code below this line
  var averageRating =
  watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
}
console.log(getRating(watchList));


// **********          Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem


// Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

// Task:

// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

const squareList = arr =>
  arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


// **********          Functional Programming: Sort an Array Alphabetically using the sort Method


// The sort method sorts the elements of an array according to the callback function.

// Example 1

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

// Example 2

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

// Task:

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


// **********          Functional Programming: Return a Sorted Array Without Changing the Original Array


// A side effect of the sort method is that it changes the order of the elements in the original array. 
// In other words, it mutates the array in place. 
// One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

// Task:

// Firstly concatenate the array taken in as a parameter to a new empty array.
// Then Use the sort() method as seen in the last challenge and create a function to sort the new array in ascending order.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);


// **********          Functional Programming: Split a String into an Array Using the split Method


// The 'split' method splits a string into an array of strings. 
// It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. 
// For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

// Example
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

// Example
var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

// Task:

function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
splitify("Hello World,I-am code");


// **********          Functional Programming: Combine an Array into a String Using the join Method


// The 'join' method is used to join the elements of an array together to create a string. 
// It takes an argument for the delimiter that is used to separate the array elements in the string.

// Example 1

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"

// Task:

function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(" ");
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");


// **********          Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs


// We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. 
// From computing averages to sorting, any array operation can be achieved by applying it. 
// Recall that map and filter are special cases of reduce.

// Task:

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"


// **********          Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria


// The 'every' method works with arrays to check if every element passes a particular test. 
// It returns a Boolean value - true if all values meet the criteria, false if not.

// Example 1

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false

// Task:

function checkPositive(arr) {
  //Alternative using ES6
  return arr.every(val => val > 0);  
  
  // Full form of code
  // return arr.every(function(value) {
  //   return value > 0;
  // });
}
checkPositive([1, 2, 3, -4, 5]);


// **********          Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria


// The 'some' method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

// Example 1

var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true

// Task:

function checkPositive(arr) {
  // Add your code below this line
return arr.some(function(value) {
  return value > 0;
});
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);


// **********          Functional Programming: Introduction to Currying and Partial Application


// The arity of a function is the number of arguments it requires. 
// Currying a function means to convert a function of N arity into N functions of arity 1.

// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

// Example 1

//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3

// This is useful in your program if you can't supply all the arguments to a function at one time. 
// You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. 

// Example 2

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

// Example 3

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

// Task:

function add(x) {
  // Add your code below this line
return function(y) {
  return function (z) {
    return x + y +z;
  }
}

  // Add your code above this line
}
add(10)(20)(30);
