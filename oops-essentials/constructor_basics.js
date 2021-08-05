// **********          Object Oriented Programming: Define a Constructor Function


// Constructors are functions that create new objects. 
// They define properties and behaviors that will belong to the new object. 
// Think of them as a blueprint for the creation of new objects.

// Example 1

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

//   Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
//   Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
//   Constructors define properties and behaviors instead of returning a value as other functions might.

// Task:

function Dog() {
    this.name = "Bob";
    this.color = "black";
    this.numLegs = 3;
}


// **********          Object Oriented Programming: Use a Constructor to Create Objects


// Example 1

function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
    // "this" inside the constructor always refers to the object being created
  }
  
let blueBird = new Bird();

// Notice that the new operator is used when calling a constructor. 
// This tells JavaScript to create a new instance of Bird called blueBird. 
// Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. 
// Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2

// Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name; // => Elvira

// Task:

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
let hound = new Dog()
console.log(hound.name);
console.log(hound.color);


// **********          Object Oriented Programming: Extend Constructors to Receive Arguments


// Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. 
// It would take a lot of time to create all the birds, then change the properties to different values for every one. 
// To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

// Example 1

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }

//   Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); 
// This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. 
// The numLegs property is still set to 2. 
// The cardinal has these properties:

// cardinal.name // => Bruce
// cardinal.color // => red
// cardinal.numLegs // => 2

// The constructor is more flexible. 
// It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. 
// They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

// Task:

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
let terrier = new Dog("Molly", "orange");
console.log(terrier);
    

// **********          Object Oriented Programming: Verify an Object's Constructor with instanceof


// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. 
// JavaScript gives a convenient way to verify this with the instanceof operator. 
// instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.

// Example 1

let Bird1 = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird1 ("Alexis", "black");
  
crow instanceof Bird1; // => true

// If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
canary instanceof Bird1; // => false

// Task:

/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(5);
  myHouse instanceof House;
console.log(myHouse);