// if and else if statements

const age = 25;
if(age > 20){
    console.log('you are over 20 years old');
}


const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}


const password = 'p@ssword123';
if(password.length >= 12){
    console.log('that password is mighty strong');
}else if(password.length >= 8){
    console.log('that password is long enought!');
} else {
    console.log('that password is not long enought!');
}

// logical operators - OR || and AND &&

const password_1 = 'p@ss';
if(password_1.length >= 12 && password_1.includes('@')){
    console.log('that password is mighty strong');
}else if(password_1.length >= 8 || password_1.includes('@') && password_1.length >= 5){
    console.log('that password is long enought!');
} else {
    console.log('that password is not long enought!');
}

// logical NOT (!)

let user = false;
if(!user){
console.log('you must be logged in to continue')
}
console.log(!true);
console.log(!false);

// break and continue 

const scores = [50, 25, 0, 30, 100, 20, 10];
for(let i = 0; i < scores.length; i++){

    if(scores[1] === 0){
        continue;
    }
    console.log('your score: ', scores[i]);
    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

// switch statements

const grade = 'D';

switch(grade){
case 'A':
    console.log('you got an A!');
    break;
case 'B':
    console.log('you got an B!');
    break;
case 'C':
    console.log('you got an C!');
    break;
case 'D':
    console.log('you got an D!');    
    break;
case 'E':
    console.log('you got an E!');
default:
    console.log('not a valid grade')
}

// variables & block scope

let age_0 = 30;

if(true){
    let age_0 = 40;
    let name_0 = 'shaun';
console.log('inside 1st code block: ', age_0, name_0);

if(true){
    let age_0 = 50;
    console.log('inside 2nd code block: ', age_0);
}
}
console.log('outside code block: ', age_0);