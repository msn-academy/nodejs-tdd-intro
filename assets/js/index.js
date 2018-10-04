const userName = '';
let firstName = null;
let lastName = null;

const newString = 'Hello world';
const date = new Date();

// const output = newString + ' ' + date;
const output = `${newString} ${date}`;

firstName = 'John';
lastName = "Doe";

console.log(output)

const firstNumber = 123.34;
const secondNumber = 456;

const sum = firstNumber + secondNumber;

console.log(sum, 'This is the sum of two numbers')

const person = {
  name: 'John Doe',
  gender: 'male',
  isVerified: true,
  age: 90
}

const arrays = [1, 2, 3, 4, 6];

console.log(person.name)


const age = 81;

if(age < 21) {
  console.log("Not of voting age");
} else {
  console.log("Voting age")
}


// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// ternary operators
const newAge = age < 21 ? "Not of voting age" : "Voting age";
console.log(newAge, 'newAge')
