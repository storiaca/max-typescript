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
