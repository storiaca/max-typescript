let names: Array<string> = ["Aleksandar", "Max"];

// type DataStore = {
//   [key: string]: string | number;
// };

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = "John";
store.isInstructor = true; // ovo ce da vrati gresku, zato moramo da napravimo da DataStore bude fleksibilnija, tako sto cemo da koristimo generics

let nameStore: DataStore<string> = {};
