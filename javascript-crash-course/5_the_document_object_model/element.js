// DOM Introduction

const para = document.querySelector('body > h1');
console.log(para);

const parasOne = document.querySelectorAll('p');
parasOne.forEach(para => {
    console.log(para);
})
console.log(parasOne[1]);

const errorsOne = document.querySelectorAll('.error');
console.log(errorsOne);

// get an element by ID

const title = document.getElementById('page-title');
console.log(title);

// get elements by Class Name

const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by Tag Name

const parasTwo = document.getElementsByTagName('p');
console.log(parasTwo);
console.log(parasTwo[1]);

// changing text inside element

const paraOne = document.querySelector('p');

console.log(paraOne.innerText);
paraOne.innerText = 'ninjas are cool';

const parass = document.querySelectorAll('p');

parass.forEach(paraOne => {
    console.log(paraOne.innerText);
    paraOne.innerText += ' new text';
});

// changing HTML inside element

const content = document.querySelector('.content');

console.log(content.innerHTML);
content.innerHTML += '<h2> This is a new h2 </h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${people}</p>`;
});
