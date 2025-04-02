type DataStore = {
  [prop: string]: number | boolean;
};

let someObj: Record<string, number | boolean>;

let store: DataStore = {};
//...

store.id = 5;
store.isOpen = false;
// store.name = "Max"; // ovo je greksa jer nije dobar tip vrednosti

// arrays
let roles = ["admin", "guest", "editor"] as const; // ovo as const znaci da je niz readonly, ne moze da se dodaje, edituje

//roles.push('max'); // greska

// satisfies
// const dataEntries: Record<string, number> = {
//   entry1: 0.36,
//   entry2: 2.54,
// };

const dataEntries = {
  entry1: 0.36,
  entry2: 2.54,
} satisfies Record<string, number>;

// ...
dataEntries.entry1;
// dataEntries.entry3; // ovo ce da bude greksa sa satisfies zato sto ce ts da gleda kljuceve da li postoje u objektu
// react router koristi ovu rec u routing delu, kada definisemo rute
// https://reactrouter.com/start/framework/routing
