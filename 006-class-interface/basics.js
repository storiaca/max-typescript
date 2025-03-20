"use strict";
// class User {
//   name: string;
//   age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
// drugi nacin da kreiramo klasu na kraci nacin
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("My age: " + this.age);
    }
}
const aca = new User("Aca", 39);
const fred = new User("Fred", 27);
// aca.age = 41; // ako je age public, mozemo da mu pristupimo, ako bi bilo private, vracalo bi gresku, zato sto ce imati pristup samo u klasi
console.log(aca.greet());
console.log(aca, fred);
