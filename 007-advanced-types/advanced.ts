type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};
//...

store.id = 5;
store.isOpen = false;
// store.name = "Max"; // ovo je greksa jer nije dobar tip vrednosti
