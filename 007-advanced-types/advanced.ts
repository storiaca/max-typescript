type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};
//...

store.id = 5;
store.isOpen = false;
// store.name = "Max"; // ovo je greksa jer nije dobar tip vrednosti

// arrays
let roles = ["admin", "guest", "editor"] as const; // ovo as const znaci da je niz readonly, ne moze da se dodaje, edituje

//roles.push('max'); // greska
