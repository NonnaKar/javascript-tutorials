// **********          Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects


// As you have seen, behavior is shared through inheritance. 
// However, there are cases when inheritance is not the best solution. 
// Inheritance does not work well for unrelated objects like Bird and Airplane. 
// They can both fly, but a Bird is not a type of Airplane and vice versa.

// For unrelated objects, it's better to use mixins. 
// A mixin allows other objects to use a collection of functions.

// Example 1

let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
};

// The flyMixin takes any object and gives it the fly method.

// Example 2

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);

// Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. 
// Now bird and plane can both fly:

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"

// Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

// Task:

let flier = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
    
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding!");
    };
  };
  glideMixin(flier);
  glideMixin(boat);

console.log(flier.glide());
console.log(boat.glide());


// **********          Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally


// The simplest way to make this public property private is by creating a variable within the constructor function. 
// This changes the scope of that variable to be within the constructor function versus available globally. 
// This way, the variable can only be accessed and changed by methods also within the constructor function.

// Example 1

function BirdA() {
    let hatchedEgg = 10; // private variable
  
    /* publicly available method that a bird object can use */
    this.getHatchedEggCount = function() { 
      return hatchedEgg;
    };
  }
let duckyy = new BirdA();
console.log(duckyy.getHatchedEggCount()); // returns 10

// Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. 
// This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 
// In JavaScript, a function always has access to the context in which it was created. 
// This is called closure.

// Task:

function BirdB() {
    let weight = 15;
    this.getWeight = function() {
      return weight;
    };
  }
let goose = new BirdB();
console.log(goose.getWeight());


// **********          Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)


// A common pattern in JavaScript is to execute a function as soon as it is declared:

// Example 1

(function () {
    console.log("Chirp, chirp!");
  })(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

// Note that the function has no name and is not stored in a variable. 
// The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
// This pattern is known as an immediately invoked function expression or IIFE.

// Task:

(function() {
    console.log("A cozy nest is ready");
})();


// **********          Object Oriented Programming: Use an IIFE to Create a Module


// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. 
// For example, an earlier challenge defined two mixins:

// Example 1

function glideMixin1(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  }
  function flyMixin1(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
}

// We can group these mixins into a module as follows:

let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
})(); // The two parentheses cause the function to be immediately invoked

// Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. 
// This returned object contains all of the mixin behaviors as properties of the object. 
// The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. 
// Here is an example using it:

motionModule.glideMixin(crow);
crow.glide();

// Task:

// If using ES6, the same can be rewritten as:

let funModule = ( () => {
    return {
      isCuteMixin: (obj) => {
        obj.isCute = () => { true; };
      },
      singMixin: (obj) => {
        obj.sing = () => { console.log("Singing to an awesome tune"); }
      }
  
    }
  })();