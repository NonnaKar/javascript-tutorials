// **********          Basic Algorithm Scripting: Convert Celsius to Fahrenheit


// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit.

// Task:

function convertToF(celsius) {
    var fahrenheit = celsius * (9 / 5) + 32;
  
    if (typeof fahrenheit !== "undefined") {
      return fahrenheit;
    } else {
      return "fahrenheit not defined";
    }
  }
console.log(convertToF(30));


// **********          Basic Algorithm Scripting: Reverse a String


// Reverse a String With Built-In Functions
// For this solution, we will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.

// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// Task:

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
reverseString("hello");

// Chaining the three methods together:

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


// **********          Basic Algorithm Scripting: Factorialize a Number


// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.


// Factorialize a Number With Recursion

// Task:

function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
        /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
    }
}
factorialize(5);

// Without comments:

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
console.log(factorialize(5));


// **********          Basic Algorithm Scripting: Find the Longest Word in a String

// Example 1

// Find the Longest Word With a FOR Loop
// For this solution, we will use the String.prototype.split() method
// The split() method splits a String object into an array of strings by separating the string into sub strings.

// Task:

function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
      
    // Step 2. Initiate a variable that will hold the length of the longest word
    var longestWord = 0;
  
    // Step 3. Create the FOR loop
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
      longestWord = strSplit[i].length; // ...then longestWord takes this new value
       }
    }
    /* Here strSplit.length = 9
       For each iteration: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
       1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
       2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
       3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
       4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
       5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
       6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
       7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
       8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
       9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
       10th iteration:       9             no               
       End of the FOR Loop*/
  
    //Step 4. Return the longest word
    return longestWord; // 6
  }
findLongestWord("The quick brown fox jumped over the lazy dog");

//   Without comments:

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Exampe 2

// Find the Longest Word With the sort() Method
// For this solution, we will use the Array.prototype.sort() method to sort the array by some ordering criterion and then return the length of the first element of this array.
// The sort() method sorts the elements of an array in place and returns the array.

// Task:

function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
    
    // Step 2. Sort the elements in the array
    var longestWord = strSplit.sort(function(a, b) { 
      return b.length - a.length;
    });
    /* Sorting process
      a           b            b.length     a.length     var longestWord
    "The"      "quick"            5            3         ["quick", "The"]
    "quick"    "brown"            5            5         ["quick", "brown", "The"]  
    "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
    "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
    "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
    "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
    "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
    "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
    */
    
    // Step 3. Return the length of the first element of the array
    return longestWord[0].length; // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
                                  // longestWord[0]="jumped" => jumped".length => 6
  }
findLongestWord("What is the average airspeed velocity of an unladen swallow");

// Without comments:

function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));


// **********          Basic Algorithm Scripting: Return Largest Numbers in Arrays


// Return the Largest Numbers in a Array With Built-In Functions — with map() and apply()

// For this solution, you’ll use two methods: the Array.prototype.map() method and the Function.prototype.apply() method.
// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
// You can pass an array of arguments to a function by using the apply() method and the function will execute the items in the array.
// Such functions are known as variadic functions, and they can accept any number of arguments instead of a fixed one.
// The Math.max() function returns the largest of zero or more numbers, and we can pass any number of arguments.

// Task:

function largestOfFour(mainArray) {
    // Step 1. Map over the main arrays
    return mainArray.map(function(subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]
      
      // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
      return Math.max.apply(null, subArray);
    });
  }
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Without comments:

function largestOfFour(mainArray) {
    return mainArray.map(function(subArray) {
      return Math.max.apply(null, subArray);
    });
  }
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// **********          Basic Algorithm Scripting: Confirm the Ending


// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Example 1

// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
// Why are you using string.substr(-target.length)?
// If the target.length is negative, the substr() method will start the counting from the end of the string, which is what you want in this code challenge.
// You don’t want to use string.substr(-1) to get the last element of the string, because if the target is longer than one letter:

// confirmEnding("Open sesame", "same")

// …the target won’t return at all.
// So here string.substr(-target.length) will get the last index of the string ‘Bastian’ which is ‘n’.
// Then you check whether string.substr(-target.length) equals the target (true or false).

// Task:

function confirmEnding(string, target) {
    // Step 1. Use the substr method
    if (string.substr(-target.length) === target) {
    
    // What does "if (string.substr(-target.length) === target)" represents?
    // The string is 'Bastian' and the target is 'n' 
    // target.length = 1 so -target.length = -1
    // if ('Bastian'.substr(-1) === 'n')
    // if ('n' === 'n')
    
    // Step 2. Return a boolean (true or false)
      return true;
    } else {
      return false;
    }
  }
  
confirmEnding('Bastian', 'n');

// Without comments:

function confirmEnding(string, target) {
    if (string.substr(-target.length) === target) {
      return true;
    } else {
      return false;
    }
  }
console.log(confirmEnding('Bastian', 'n'));

// You can use a ternary operator as a shortcut for the if statement:

// Example
// (string.substr(-target.length) === target) ? true : false;

// Task:

function confirmEnding(string, target) {
    return (string.substr(-target.length) === target) ? true : false;
  }
  confirmEnding('Bastian', 'n');

// You can also refactor your code to make it more succinct by just returning the condition:

function confirmEnding(string, target) {
    return string.substr(-target.length) === target;
  }
confirmEnding('Bastian', 'n');

// Example 2

// Confirm the Ending of a String With Built-In Functions — with endsWith()

// The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate. 
// This method is case-sensitive.

// Task:

function confirmEnding(string, target) {
    // We return the method with the target as a parameter
    // The result will be a boolean (true/false)
    return string.endsWith(target); // 'Bastian'.endsWith('n')
  }
confirmEnding('Bastian', 'n');


// **********          Basic Algorithm Scripting: Repeat a String Repeat a String


// Repeat a String using ES6 repeat() method
// For this solution, you’ll use the String.prototype.repeat() method:
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

// Task:

function repeatStringNumTimes(string, times) {
    //Step 1. If times is positive, return the repeated string
    if (times > 0) { // (3 > 0) => true
      return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
    }
    
    //Step 2. Else if times is negative, return an empty string if true
    else {
      return "";
    }
  }
  
repeatStringNumTimes("abc", 3);

// Without comments:

function repeatStringNumTimes(string, times) {
    if (times > 0)
      return string.repeat(times);
    else
      return "";
  }
console.log(repeatStringNumTimes("abc", 3));


// **********          Basic Algorithm Scripting: Truncate a String


// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

// Task:

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//   We start off with a simple if statement to determine one of two outcomes…
//   If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. 
// We then append our '...' to the end of the string.
//   However, if above situation is not true, it means our string length is less than our truncation num. 
// Therefore, we can just return the string.


// **********          Basic Algorithm Scripting: Finders Keepers

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.

// Example 1

// Challenge asks us to look through array. This is done using a for loop.
// The num variable is being passed into the function, so we set it to each index in our array.
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.
// If none of the numbers in the array pass the function’s test, we return undefined.

// Task:

function findElement(arr, func) {
    let num = 0;
  
    for (var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Example 2

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If you need the index of the found element in the array, use findIndex().
// If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
// If you need to find if a value exists in an array, use Array.prototype.includes().

// Task:

function findElement(arr, func) {
    return arr.find(func);
  }

// Example 3

// Look through the array given in the 1st paramater “arr” using the .map() method
// Use the function in the 2nd parameter as the callback function in arr.map()
// Acquire the index of the first number that meets the condition in the function.
// Use that index to display the first available number that meets the condition.

// Task:

function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
  }


// **********          Basic Algorithm Scripting: Boo who


// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

// Example 1

function booWho(bool) {
    if (bool === true || bool === false) {
      return true
    } else {
      return false
    }
  }
  
  booWho(null);

// Example 2

// A quick note on typeof: the typeof operator returns a string indicating the type of the unevaluated operand. 
// So for example:

typeof 42
// returns 'number'

typeof 'Hello, there'
// returns 'string'

typeof true
// returns 'boolean'

// Task:

function booWho(bool) {
    return typeof(bool) === "boolean"
  }
  
console.log(booWho(null));


// **********          Basic Algorithm Scripting: Title Case a Sentence


// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Example 1

// We are making entire string lowercase and then converting it into array. 
// Then we are using map function to replace the lowercase character with uppercase. 
// Finally, we are returning the string using join method.

// Task:

function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  titleCase("I'm a little tea pot");

// Example 2

// The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

// Lowercase the whole string using str.toLowerCase().
// Replace every word’ first character to uppercase using .replace.
// Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
// Regex explanation:
// Find all non-whitespace characters (\S)
// At the beginning of string (^)
// Or after any whitespace character (\s)
// The g modifier searches for other such word pattern in the whole string and replaces them.

// Task:

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }
console.log(titleCase("I'm a little tea pot"));


// **********          Basic Algorithm Scripting: Slice and Splice


// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

// The slice( ) method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.

// array.slice(from, until);

// From: Slice the array starting from an element index
// Until: Slice the array until another element index

// The splice( ) method changes an array, by adding or removing elements from it.
// For removing elements, we need to give the index parameter, and the number of elements to be removed:

// array.splice(index, number of elements);

// For adding elements, we need to give them as the 3rd, 4th, 5th parameter (depends on how many to add) to the splice ( ) method:

// array.splice(index, number of elements, element, element);

// As an example, I’m adding a and b in the very beginning of the array and I remove nothing:

// array.splice(0, 0, 'a', 'b');

// Task:

function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function
// Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....
// localArr is returned and the function is complete.


// **********          Basic Algorithm Scripting: Falsy Bouncer


// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Task:

function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
console.log(bouncer([7, "ate", "", false, 9]));

// The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value.


// **********          Basic Algorithm Scripting: Where do I Belong


// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// Example 1:

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num) return a;
    }
  
    return arr.length;
  }
console.log(getIndexToIns([40, 60], 50));

// Example 2

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var times = arr.length; // runs the for loop once for each thing in the array
    var count = 0;
    for (var i = 0; i < times; i++) {
      if (num > arr[i]) {
        count++;
      }
    } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
  }
  
  getIndexToIns([40, 60], 50);

// Example 3

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    var i = 0;
    while (num > arr[i]) {
      i++;
    }
  
    return i;
  }
  
  getIndexToIns([40, 60], 50);

// Example 4

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr.indexOf(num);
  }

// Example 5

function getIndexToIns(arr, num) {
    // sort and find right index
    var index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;
  }
  
  getIndexToIns([40, 60], 500);

// Example 6

function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }
  
  getIndexToIns([1, 3, 4], 2);

// Example 7

function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }


// **********          Basic Algorithm Scripting: Mutations


// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Task:

function mutation(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) != -1;
      });
  }
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Tiger", "Zebra"]));

// Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.
// Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. 
// We check that not to be the case, for if this happens even once every will be false.


// **********          Basic Algorithm Scripting: Chunky Monkey


// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Example 1

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arr2 = [];
    for (var i = 0; i < arr.length; i += size) {
      arr2.push(arr.slice(i, i + size));
    }
    return arr2;
  }

// First, we create an empty array arr2 where we will store our ‘chunks’.
// The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
// Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
// Finally, we return the value of arr2.

// Example 2

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Firstly, we create a variable. newArr is an empty array which we will push to.
// Our while loop loops until the length of the array in our test is not 0.
// Inside our loop, we push to the newArr array using arr.splice(0, size).
// For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
// Finally, we return the value of newArr.