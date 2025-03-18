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
