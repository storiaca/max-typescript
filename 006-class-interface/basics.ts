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
  public hobbies: string[] = [];
  constructor(public name: string, private age: number) {}

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
