// **********          LET and CONST variables 
let age = 30;
if (true) {
    let age = 27;
    console.log(age);
} 
console.log(age);


const Ages = [27, 29, 31];
console.log(Ages);
Ages.push(25);
console.log(Ages);


const OBJ = {
    ages: 27
};
console.log(OBJ);
OBJ.ages = 30;
console.log(OBJ);


// **********          Hoisting variables (LET and CONST)  
let year;
year = 2020;
console.log(year);


ageOne = 27;
console.log(ageOne);
var ageOne;


function doSmth(){
    ageTwo= 18;
}

let ageTwo;
doSmth();
console.log(ageTwo);


// **********          Arrow => function short hand    
var fn = () => 'Hello!';
// function fn(){
//     return 'Hello!';
// }
console.log(fn());


var fn1 = (a, b) => a + b;
console.log(fn1(3, 8));


var fn2 = a => a + 5;
console.log(fn2(3));


setTimeout(() => console.log('Hello'), 1000);


// **********          Arrow function and THIS
var button = document.querySelector('button');

var fN2 = () => console.log(this);

function fN() {
    console.log(this);
}

button.addEventListener('click', fN2);


// **********          Function default parameter values
function isEqualTo(number = 10, compare = number) {
    console.log(number);
    console.log(compare);
    return number == compare;
}
console.log(isEqualTo()) //overwrite


// **********          Object literals short hand
let name = 'Ann';
let age1 = 25;

let ageField = "age1";

let obj = {
    "name": 'Max',
    [ageField]: 28,
    "greet" () {
        console.log('Hello, I am ' + this.name + ' and I am ' + this.age1)
    }
};
console.log(obj[ageField]);
obj["greet"]();


// **********          Rest ... operator 
function sumUp (...toAdd) {
    console.log(toAdd);
    let result = 0;
    for (let i = 0; i < toAdd.length; i++ ) {
        result += toAdd[i];
    }
    return result;
}
console.log(sumUp(100, 10, 20));


// **********          Spread ... operator 
let numbers = [1, 2, 3, 4, 5];
console.log(...numbers);
console.log(Math.max(...numbers));


// **********          For Of Loop
let testResults = [1.23, 1.10, 4.1];

for (let restResult of testResults) {
    console.log(testResults);
}


// **********          Template  ` literals `
let nameOne = 'Vijay';

let description = `
Hello, dear ${nameOne}
`;
console.log(description);


// **********          Destructing arrays[ ] with default parameters
let numb = [1, 2, 3];
let [a, ...b] = numb;
console.log(a);
console.log(b); 


let h = 5;
let i = 10;
[i, h] = [h, i];
console.log(h);
console.log(i);


let [e, f] = [1, 2, 3];
console.log(e, f);

// change by position

// **********          Destructing {Objects} with alias
let obJ = {
    nameN: 'Nonna',
    ageE: 22,
    greetT: function() {
        console.log('Hello there!');
    }
};

let {nameN, greetT} = obJ;
greetT();

// change by property name 