// **********          Object Oriented Programming: Create a Basic JavaScript Object


// Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. 
// Here's an example using these concepts to create a duck object:

// Example 1

let duck = {
    name: "Aflac",
    numLegs: 2
  };
console.log(duck);

// Task:

let dog = {
    name: "Bob",
    numLegs: 4
    };
console.log(dog);


// **********          Object Oriented Programming: Use Dot Notation to Access the Properties of an Object


// The last challenge created an object with various properties. 
// Now you'll see how to access the values of those properties. 

// Example 1

let chicken = {
    name: "Mia",
    numLegs: 2
  };
console.log(chicken.name);


// **********          Object Oriented Programming: Create a Method on an Object


// Objects can have a special type of property, called a method.
// Methods are properties that are functions. 
// This adds different behavior to an object. 
// Here is the duck example with a method:

// Example 1

let duck1 = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck1.name + ".";}
  };
console.log(duck1.sayName());
// Returns "The name of this duck is Aflac."

// Task:

let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog1.numLegs + " legs.";}
  };
  
console.log(dog1.sayLegs());


// **********          Object Oriented Programming: Make Code More Reusable with the 'this' Keyword


// The last challenge introduced a method to the duck object. 
// It used duck.name dot notation to access the value for the name property within the return statement.
// While 'this' is a valid way to access the object's property, there is a pitfall here. 
// If the variable name changes, any code referencing the original name would need to be updated as well. 
// In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

// A way to avoid these issues is with the 'this' keyword:

// Example 1

let ducky = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
};

// 'this' is a deep topic, and the above example is only one way to use it. 
// In the current context, 'this' refers to the object that the method is associated with: duck. 
// If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. 
// It makes the code reusable and easier to read.

// Task:

let dogy = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
console.log(dogy.sayLegs());