// **********     ES6: Use getters and setters to Control Access to an Object


// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. 
// Setter could involve calculations, or even overwriting the previous value completely.

// Example 1

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
const lol = new Book('anonymous');
console.log(lol.writer);
lol.writer = 'wut';
console.log(lol.writer);

// Task:

class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 
console.log(thermos.temperature);