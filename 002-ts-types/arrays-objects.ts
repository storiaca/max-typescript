// arrays
let hobbies = ["Sports", "Cooking"];

// ako probamo da dodamo broj u niz dobicemo gresku
// znaci da je ts vec odredio da je niz koji ima samo tipove string: hobbies: string[]
// hobbies.push(10);

// mozemo da definsemo kojeg ce tipa da budu vrednosti u nizu na primer stingove i brojeve:
let users: (string | number)[];

users = [1, "Max"];

// mozemo da koristimo i generics za tipove niza

let korisnici: Array<string | number>;

korisnici = ["Aca", 4];

// tuples type, moze da budu bilo koje duzine i tipa
let possibleResults: [number, number]; // [1, -1]
possibleResults = [3, -5];
// possibleResults = [5, 10, 12]; // error, vise od 2 tipa

// object tipovi
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Max",
  age: 35,
  hobbies: ["Soprts", "Cooking"],
  role: {
    description: "admin",
    id: 5,
  },
};

// ovaj tip {} ne znaci da mora da bude objekat, znaci bilo koja vrednost koja nije undefined ili null
let val: {} = "some text";

// fleksibilni objekti sa Record tipom koji moze da se koristi kada ne znamo unapred koji ce tip da bude, navodimo koji ce da bude key tip kao prva vrednost, a kao druga navodimo kojieg ce tipa da budu vrednosti
let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: "some string",
};
