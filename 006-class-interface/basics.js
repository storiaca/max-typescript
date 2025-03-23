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
// public i private se nalaze samo u ts-u, nema ih u vanila js-u
// mada js ima privatne variable ako dodamo # ispred variable: #privateField
// public je default ako ne navedemo, mada u konstruktoru uvek treba da navedemo public ili private
console.log(aca.greet());
console.log(aca, fred);
// mozemo da koristimo i readonly kljucnu rec, moze da se korsti u kombinaciji sa public ili private ali i bez nje, ona onznacava da property ne moze da se menja, ne moze da se ponovo dodeli
// aca.hobbies = []; // ovo ne moze ako je hobbies readonly
aca.hobbies.push("Sports"); // ovo moze zato sto je hobbies array, tehnicki mi ga ovako ne menjamo, zato sto baratamo original nizom u memoriji
