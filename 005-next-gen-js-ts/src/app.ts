// Code goes here!
const userName = "Max";
// userName = 'Maximilian';
let age = 30;

age = 27;

// var result;
let result: number = 0; // ovde mora da se dodeli neka vrednost za result inace ce da javlja gresku u liniji 18

function add(a: number, b: number) {
  // let result;
  result = a + b;
  return result;
}

add(6, 3);
console.log(result);

// arrow functions

const add2 = (a: number, b: number) => {
  return a + b;
};

console.log(add2(32, 67));

const printOutput = (output: string | number) => console.log(output);

printOutput(add2(54, 28));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// default function parameters

function exampleAdd(a: number, b: number = 78) {
  return a + b;
}

console.log(exampleAdd(56));

// ovde je bitan red, ako definisemo prvi parametar da ima default vrednost onda moramo tako i da pozovemo funkciju

// spread operator
const hobbies = ["Sports", "Playing", "Reading"];
const activeHobbies = ["Cooking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: "Aca",
  agePerson: 30,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

// rest operator

const add3 = (...numbers: number[]) => {
  let result = 0;

  result = numbers.reduce((curResult, curValue) => curResult + curValue, 0);

  return result;
};

const addedNumbers = add3(5, 10, 23, 45, 72);

console.log(addedNumbers);

// array and object destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName, agePerson } = person;

console.log(firstName, agePerson);
