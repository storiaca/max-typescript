let names: Array<string> = ["Aleksandar", "Max"];

// type DataStore = {
//   [key: string]: string | number;
// };

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = "John";
store.isInstructor = true; // ovo ce da vrati gresku, zato moramo da napravimo da DataStore bude fleksibilnija, tako sto cemo da koristimo generic

let nameStore: DataStore<string> = {};

// mozemo da gradimo i generic funkcije
function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge<number>(1, 2); // u ovom slucaju mozemo da izostavimo ovo <number> zato sto ce ts da prepozna koji su tipovi argumenti

// da imamo vise tipova kao parametre
function merge2<T, U>(a: T, b: U) {
  return [a, b];
}

const ids2 = merge2(1, "Aleksandar");
