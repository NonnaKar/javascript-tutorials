// **********          Basic Data Structures: Add Key-Value Pairs to JavaScript Objects


// At their most basic, objects are just collections of key-value pairs, or in other words, pieces of data mapped to unique identifiers that we call properties or keys. 

// Example 1

let FCC_User = {
    username: 'awesome_coder',
    followers: 572,
    points: 1741,
    completedProjects: 15
};

//   The above code defines an object called FCC_User that has four properties, each of which map to a specific value. 
// If we wanted to know the number of followers FCC_User has, we can access that property by writing:

// Example 2

let userData1 = FCC_User.followers;
// userData equals 572

// This is called dot notation. 
// Alternatively, we can also access the property with brackets, like so:

// Example 3

let userData2 = FCC_User['followers'];
// userData equals 572

// Task:

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  foods["bananas"] = 13;
  foods["grapes"] = 35;
  foods["strawberries"] = 27;

console.log(foods);


// **********          Basic Data Structures: Modify an Object Nested Within an Object


// Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. 

// Example 1

let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13
      }
    }
};

// nestedObject has three unique keys: id, whose value is a number, date whose value is a string, and data, whose value is an object which has yet another object nested within it.
// While structures can quickly become complex, we can still use the same notations to access the information we need.

// Task:

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online = 45;
console.log(userActivity);


// **********          Basic Data Structures: Access Property Names with Bracket Notation


// In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. 
// For instance, imagine that our foods object is being used in a program for a supermarket cash register. 
// We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. 

// Example 1

// let selectedFood = getCurrentFood(scannedItem);
// let inventory = foods[selectedFood];

// This code will evaluate the value stored in the selectedFood variable and return the value of that key in the foods object, or undefined if it is not present. 
// Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

// Task:

let foods1 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
   return foods1[scannedItem];
  }
console.log(checkInventory("apples"));
  

// **********          Basic Data Structures: Use the delete Keyword to Remove Object Properties


// In earlier challenges, we have both added to and modified an object's key-value pairs. 
// Here we will see how we can remove a key-value pair from an object.

// Let's revisit our foods object example one last time. 
// If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

// Example 1

delete foods1.apples;

// Task:

let foods2 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  delete foods2.oranges;
  delete foods2.plums;
  delete foods2.strawberries;
    
console.log(foods2);
  

// **********          Basic Data Structures: Check if an Object has a Property


// Now we can add, modify, and remove keys from objects. 
// But what if we just wanted to know if an object has a specific property? 
// JavaScript provides us with two different ways to do this. 
// One uses the hasOwnProperty() method and the other uses the 'in' keyword. 
// If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

// Example 1

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// both return true

// Task:

let userS = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      obj.hasOwnProperty(name)
    );
  }
console.log(isEveryoneHere(userS));

// Uses an array with all of the names which should be present in the object.
// The every method is used to validate all of names used in conjunction with the hasOwnProperty method result in a value of true being returned during each iteration.
// If at least one name is not found using the hasOwnProperty method, the every method returns false.


// **********          Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement


// Sometimes you may need to iterate through all the keys within an object. 
// This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:

// Example 1

for (let user in userS) {
    console.log(user);
  }

// Task:

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  function countOnline(obj) {
    let result = 0;
    for (let user in obj) {
      if (obj[user].online === true) {
        result++;
      }
    }
    return result;
  }
console.log(countOnline(users));


// **********          Basic Data Structures: Generate an Array of All Object Keys with Object.keys()


// We can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument. 
// This will return an array with strings representing each property in the object. 
// Again, there will be no specific order to the entries in the array.

// Task:

let users5 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    return Object.keys(obj);
  }
console.log(getArrayOfUsers(users5));


// **********          Basic Data Structures: Modify an Array Stored in an Object


// Now you've seen all the basic operations for JavaScript objects. 
// You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object.

// Task:

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
   userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete')); 

  