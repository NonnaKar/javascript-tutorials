const name = 'shaun';

// funcion 

const greetOne = () => 'hello';

let resultOne = greetOne();
console.log(resultOne);

// methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};
myFunc(value => {
    // do something
    console.log(value);
});

// example 
let people = ['kate', 'tom', 'sam', 'rio', 'mario'];
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
};
people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people_p');

const people_p = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people_p.forEach(person => {
    // create html template
    html += `<li style="color:green">${person}</li>`
});

console.log(html);
ul.innerHTML = html;