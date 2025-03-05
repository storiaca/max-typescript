console.log("Hello TypeScript!");

// kompajliramo fajl sa komandom:
// tsc 002-ts-types/basic.ts
// dobijamo fajl basic.js
// pokrenemo ga sa: node basic.js

/* Types */
// variables: string, number, boolean
// let userName: string;
let userAge = 38;

userName = "Aleksandar";
// userAge = '34'

// function parameters example
function add(a: number, b = 5) {
  return a + b;
}

add(10);
// moramo da prosledimo broj kao parameta
