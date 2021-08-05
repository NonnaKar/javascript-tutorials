// for loops

for(let i = 0; i < 5; i++){
     console.log('in loop: ', i);
}
console.log('loop finished');


const names = ['shaun', 'mario', 'luigi'];
for(let i = 0; i < names.length; i++){
    // console.log(names[i]);
    let html = `<div>${names}</div>`;
    console.log(html);
}

// while loops

let i_1 = 0;
while (i_1 < 5){
    console.log('in loop: ', i_1);
    i_1++;
}


const names_1 = ['shaun', 'mario', 'luigi'];
let i = 0;
while (i < names_1.length){
    console.log(names_1[i]);
    i++;
}

// do while loops

let i_2 = 2;
do{
    console.log('val of i is: ', i_2);
    i_2++;
} while(i_2 < 5);

