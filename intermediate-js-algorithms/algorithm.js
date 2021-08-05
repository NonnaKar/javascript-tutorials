// **********          Intermediate Algorithm Scripting: Sum All Numbers in a Range


// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
      sum += i;
    }
    return sum;
  }
  
console.log(sumAll([1, 4]));


// **********          Intermediate Algorithm Scripting: Diff Two Arrays


// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.
// Example 1
function diffArray (arr1, arr2) {
    return arr1.concat(arr2)
    .filter(item => !arr1.includes(item)  ||  !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Example 2 Almost 
function diffArray(arr1, arr2) {
    let newArr = []
    let largeArr = arr1.concat(arr2);
    newArr = largeArr.filter(item => {
      return ( !arr1.includes(item) || !arr2.includes(item) )
      });
      
    return newArr;
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// **********          Intermediate Algorithm Scripting: Seek and Destroy


// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    let args = Array.prototype.slice.call(arguments);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// **********          Intermediate Algorithm Scripting: Wherefore art thou


// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// Example 1
// for(let index=0; index<collection.length; index++) {
//   const temp = collection[index]
//   for (let tkey in temp) {
//     for (let skey in source) {
//       if(tkey==skey) {
//         if(temp[tkey] == source[skey]) {
//           arr.push(temp)
//         }
//       }
//     }
//   }
// }

function whatIsInAName(collection, source) {
  var arr = [];  
  const sourceArr = Object.keys(source)
  
  for (let cindex = 0; cindex < collection.length; cindex++) {
    const ctemp = collection[cindex]
    let counts = 0
    for (let sindex = 0; sindex < sourceArr.length; sindex++) {
      const selement = sourceArr[sindex]             
      if (ctemp.hasOwnProperty(selement) && ctemp[selement]==source[selement]) {
        counts++
      }
    }
    if (counts == sourceArr.length) {
      arr.push(ctemp)
    }
  }
    return arr;
  }
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  

// **********          Intermediate Algorithm Scripting: Spinal Tap Case


// Convert a string to spinal case. 
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
console.log(spinalCase('This Is Spinal Tap'));


// **********          Intermediate Algorithm Scripting: Pig Latin


// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// If a word does not contain a vowel, just add "ay" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("consonant"));

// *** Code Explanation
// start at beginning and get longest match of everything not a vowel (consonants)
// if regex pattern found, it saves the match; else, it returns null
// if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
// if regex pattern not found (starts with vowels), it just adds “way” to the ending


// **********          Intermediate Algorithm Scripting: Search and Replace


// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  // Find index where before is on string
  let index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not 
  if (str[index] === str[index].toUpperCase()) {
    // Changen the after word to be capitalized before we use it 
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one 
  str = str.replace(before, after);

  return str; 
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// *** Code Explanation
// Use indexOf() to find location of before in string.
// If first letter of before is capitalized, change first letter of after to uppercase.
// Replace before in the string with after.
// Return the new string.


// **********          Intermediate Algorithm Scripting: DNA Pairing


// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  let paired = [];

  // Function to check with strand to pair.
  let search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");


// **********          Intermediate Algorithm Scripting: Missing letters