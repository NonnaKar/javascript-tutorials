// **********     ES6: Write Concise Declarative Functions with ES6


// With ES6, You can remove the function keyword and colon altogether when defining functions in objects.

// Example 1

const Person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };
console.log(Person.sayHello())

// Task:

const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
console.log(bicycle.gear);
  