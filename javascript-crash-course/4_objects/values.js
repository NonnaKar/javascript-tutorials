// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userFirst = {name: 'ryu', age: 30 };
const userSecond = userFirst;

console.log(userFirst, userSecond);

userFirst.age = 40;
console.log(userFirst, userSecond);
