// **********     ES6: Use class Syntax to Define a Constructor Function

// ES6 provides a new syntax to create objects, using the class keyword.
// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

// Example 1

class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

// UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
// The constructor method is a special method for creating and initializing an object created with a class. 

// Task:

class Vegetable{
    constructor(name){
        this.name=name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);
