// function declaration

function greet(){
console.log('hello there!');
}

// function expression

const speak = function(){
console.log('good day!');
};

greet();
greet();

speak();
speak();

// argument & parameters

const write = function(phrase = 'my darling', time = 'right now'){
    console.log(`You are gorgerous ${phrase} ${time}!`)
};
write()
write('my dear');

// returning values

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// arrow functions

const calcArea = radius => 3.14 * radius**2;
const a = calcArea(5);
console.log('area is: ', a);

// practise arrow functions

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

