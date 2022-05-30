console.log('hello world');


// assign a value to the user.
let user = "Pedro";

// intializing a variable.
let cat = 'tom';

let greeting = ['a', 'b', 'c'];


// in one line
let mouse, dog;


//Data types.

//modulo - %

//strings - sequencce of characters

const backticks = `greeting`

const other = `${user} ${cat}`;

console.log(other);

// accessing characters in the srting.

console.log(greeting.length);


console.log(greeting[greeting.length - 3]);


console.log(greeting.indexOf('a'));


console.log(user.includes('e'));

const sliced = greeting.slice(0, 2);

console.log(sliced);


let name = 'marco';

let hacker = 'yourname';

// 'Yourname'

const firstCharacter = hacker[0].toUpperCase();
const rest = hacker.slice(1);

hacker = firstCharacter + rest;

console.log(hacker);

// boolean operators

console.log(4 > 3)

// check for equality

console.log(4 !== '4');

console.log(4 == '4');

// === stricly equal and also checks the type.

// conditionals

if(5 > 3) {
    console.log('this is true');
} else {
    console.log('this is false');
}

//empty string
let password = undefined;
// check if password is set
if(!password) {
    console.log('truhty');
} else {
    console.log('falsy');
}


console.clear();
/*
const age = Number(prompt('what is your age'));
console.log(age);

if (age >= 18) {
    console.log('you can drive')
} else if(age === 17) {
    console.log('you can drive with an adult');
}
 else {
    console.log('you are not allowed to drive');
}

const language = prompt('what is your language?');

switch (language) {
    case 'french':
        console.log('bonjour');
        break;
    case 'english':
        console.log('hello');
        break;
    case 'german':
        console.log('guten tag');
        break;
    default:
        console.log('language not recognized');
        break;

}*/


let userPassword;



while(userPassword !== '123') {
    userPassword = prompt('the password is wrong');
}

alert('acess granted');




