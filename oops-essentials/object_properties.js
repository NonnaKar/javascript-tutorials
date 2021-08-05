// **********          Object Oriented Programming: Understand Own Properties


// In the following example, the Bird constructor defines two properties: name and numLegs:

class Wings {
    constructor(name) {
        this.name = name;
        this.numLegs = 2;
    }
}
  
let ducks = new Wings ("Donald");
let canaries = new Wings ("Tweety");

// name and numLegs are called own properties, because they are defined directly on the instance object. 
// That means that duck and canary each has its own separate copy of these properties. 
// In fact every instance of Bird will have its own copy of these properties. 
// The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in ducky) {
  if(ducky.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

// Task:

class Birds {
    constructor(name) {
        this.name = name;
        this.numLegs = 2;
    }
}
  
  let canary1 = new Birds("Tweety");
  let ownProps1 = [];
  for (let property in canary1) {
    if (canary1.hasOwnProperty(property)) {
      ownProps1.push(property);
    }
  }
console.log(ownProps1);


// **********          Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code


// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.
// This may not be an issue when there are only two instances, but imagine if there are millions of instances. 
// That would be a lot of duplicated variables.
// A better way is to use Bird’s prototype. 
// Properties in the prototype are shared among ALL instances of Bird. 
// Here's how to add numLegs to the Bird prototype:

// Bird.prototype.numLegs = 2;

// Now all instances of Bird have the numLegs property.

// console.log(duckk.numLegs);  // prints 2
// console.log(canaryy.numLegs);  // prints 2

// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. 
// Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. 
// Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

// Task:

class Dog1 {
    constructor(name) {
        this.name = name;
    }
}
  Dog1.prototype.numLegs = 2;

let haski = new Dog1("Snoopy");


// **********          Object Oriented Programming: Iterate Over All Properties
// You have now seen two kinds of properties: own properties and prototype properties. 
// Own properties are defined directly on the object instance itself. 
// And prototype properties are defined on the prototype.

// Example 1

class Bird3 {
    constructor(name) {
        this.name = name; //own property
    }
}
  
  Bird3.prototype.numLegs = 2; // prototype property
  
let duck0 = new Bird3("Donald");

// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

// Example 2

let ownProps2 = [];
let prototypeProps2 = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps2.push(property);
  }
}

console.log(ownProps2); // prints ["name"]
console.log(prototypeProps2); // prints ["numLegs"]

// Task:

class Dog2 {
    constructor(name) {
        this.name = name;
    }
}
  Dog2.prototype.numLegs = 4;
  
  let beagle = new Dog2("Snoopy");
  
  let ownProp = [];
  let prototypeProp = [];
    
  for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
      ownProp.push(property);
    } else {
      prototypeProp.push(property);
    }
  }
console.log(ownProp);
console.log(prototypeProp);


// **********          Object Oriented Programming: Understand the Constructor Property


// There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

let duck5 = new Bird();
let beagle5 = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true

// Note that the constructor property is a reference to the constructor function that created the instance. 
// The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. 
// Here's an example of how this could be used:

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
      return true;
    } else {
      return false;
    }
  }

// Task:

function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }

// **********          Object Oriented Programming: Change the Prototype to a New Object


// A more efficient way is to set the prototype to a new object that already contains the properties. 
// This way, the properties are added all at once:

// Example 1

function BirdOne(name) {
  this.name = name;
}

BirdOne.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Task:

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
numLegs: 4,
eat: function () {
  console.log("nom nom nom");
},
describe: function() {
  console.log("My name is" + this.name);
}
};


// **********          Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype


// There is one crucial side effect of manually setting the prototype to a new object. 
// It erases the constructor property! 
// This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works

// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

// Example 1

function Kitten(name) {
  this.name = name;
}

Kitten.prototype = {
  constructor: Kitten, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

// Task:

function Fish(name) {
  this.name = name;
}

Fish.prototype = {
constructor: Fish,
  numEyes: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


// **********          Object Oriented Programming: Understand Where an Object’s Prototype Comes From


// Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. 
// For example, here the 'Boy' constructor creates the 'kid' object:

function Boy(name) {
  this.name = name;
}

let kid = new Boy("Tom");

// 'kid' inherits its prototype from the 'Boy' constructor function. You can show this relationship with the isPrototypeOf method

Boy.prototype.isPrototypeOf(kid);

// Task:

function Dog(name) {
  this.name = name;
}

let beagles = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagles);


// **********          Object Oriented Programming: Understand the Prototype Chain


// All objects in JavaScript (with a few exceptions) have a prototype. 
// Also, an object’s prototype itself is an object.

// Because a prototype is an object, a prototype can have its own prototype! 
// In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
// returns true

// How is this useful? 
// You may recall the hasOwnProperty method from a previous challenge:

// let duck = new Bird("Donald");
// duck.hasOwnProperty("name"); // => true

// The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. 
// This is an example of the prototype chain. 
// In this prototype chain, Bird is the supertype for duck, while duck is the subtype. 
// Object is a supertype for both Bird and duck. 
// Object is a supertype for all objects in JavaScript. 
// Therefore, any object can use the hasOwnProperty method.

// Task:

function Mouse(name) {
  this.name = name;
}
let pet = new Mouse("Snoopy");
Mouse.prototype.isPrototypeOf(pet);  // => true
Object.prototype.isPrototypeOf(Mouse.prototype);
console.log(pet);