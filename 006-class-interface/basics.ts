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
  constructor(public name: string, public age: number) {}
}

const aca = new User("Aca", 39);
const fred = new User("Fred", 27);

console.log(aca, fred);
