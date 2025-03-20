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
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const aca = new User("Aca", 39);
const fred = new User("Fred", 27);
console.log(aca, fred);
