// **********          Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself


// There's a principle in programming called Don't Repeat Yourself (DRY). 
// The reason repeated code is a problem is because any change requires fixing code in multiple places. 
// This usually means more work for programmers and more room for errors.

Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

// The describe method is repeated in two places. 
// The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
    constructor: Bird
  };
  
  Dog.prototype = {
    constructor: Dog
  };

// Task:

function Squirrel (name) {
    this.name = name;
  }
  
  Squirrel.prototype = {
    constructor: Squirrel
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() {}
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};


// **********          Object Oriented Programming: Inherit Behaviors from a Supertype


let animal = Object.create(Animal.prototype);

// Object.create(obj) creates a new object, and sets obj as the new object's prototype. 
// Recall that the prototype is like the "recipe" for creating an object. 
// By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true

// Task:

function Family() { }

Family.prototype = {
  constructor: Family,
  eat: function() {
    console.log("nom nom nom");
  }
};

let mom = Object.create(Family.prototype); 
let dad = Object.create(Family.prototype);

console.log(mom.eat()); // Should print "nom nom nom"
console.log(dad.eat()); // Should print "nom nom nom"


// **********          Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent


// In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

// This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);

// Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

// Example 1

let duckO = new Bird("Donald");
duckO.eat(); // prints "nom nom nom"

// duck inherits all of Animal's properties, including the eat method.

// Task:

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dogy() { }

Dogy.prototype = Object.create(Animal.prototype);
let beagleE = new Dogy();
console.log(beagleE.eat());  // Should print "nom nom nom"


// **********          Object Oriented Programming: Reset an Inherited Constructor Property


// When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

// Example 1

function Birdd() { }
Birdd.prototype = Object.create(Animal.prototype);
let duckk = new Birdd();
console.log(duckk.constructor); // function Animal()

// But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
// To do so, you can manually set Bird's constructor property to the Bird object:

Birdd.prototype.constructor = Birdd;
console.log(duckk.constructor) // function Bird(){...}

// Task:

function Animalll() { }
function Birddd() { }
function Doggg() { }

Birddd.prototype = Object.create(Animalll.prototype);
Doggg.prototype = Object.create(Animalll.prototype);

Birddd.prototype.constructor = Birddd;
Doggg.prototype.constructor = Doggg;

let duckkk = new Birddd();
let beagleee = new Doggg();

console.log(duckkk.constructor) 
console.log(beagleee.constructor)


// **********          Object Oriented Programming: Add Methods After Inheritance


// A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

// Task:

function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Wolf() {}

Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.constructor = Wolf;
Wolf.prototype.bark = function() {
  console.log("Woof woof!");
};

let wild = new Wolf();

wild.eat(); // Should print "nom nom nom"
wild.bark(); // Should print "Woof!"


// **********          Object Oriented Programming: Override Inherited Methods


// In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object.

// Example 1
// ChildObject.prototype = Object.create(ParentObject.prototype);

// Then the ChildObject received its own methods by chaining them onto its prototype:

// Example 2
// ChildObject.prototype.methodName = function() {...};

// It's possible to override an inherited method. 
// It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. 
// Here's an example of Bird overriding the eat() method inherited from Animal:

// Example 3
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};

// If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

// duck => Is eat() defined here? No.
// Bird => Is eat() defined here? => Yes. Execute it and stop searching.
// Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
// Object => JavaScript stopped searching before reaching this level.

// Task:

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird."
}

let penguin = new Penguin();
console.log(penguin.fly());

