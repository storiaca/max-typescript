console.log("Hello TypeScript!");
// kompajliramo fajl sa komandom:
// tsc 002-ts-types/basic.ts
// dobijamo fajl basic.js
// pokrenemo ga sa: node basic.js
/* Types */
// variables: string, number, boolean
var userName;
var userAge = 38;
userName = "Aleksandar";
// userAge = '34'
// function parameters example
function add(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
}
add(10);
// moramo da prosledimo broj kao parametar
// any tip
