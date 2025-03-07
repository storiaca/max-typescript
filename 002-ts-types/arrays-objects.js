// arrays
var hobbies = ["Sports", "Cooking"];
// ako probamo da dodamo broj u niz dobicemo gresku
// znaci da je ts vec odredio da je niz koji ima samo tipove string: hobbies: string[]
// hobbies.push(10);
// mozemo da definsemo kojeg ce tipa da budu vrednosti u nizu na primer stingove i brojeve:
var users;
users = [1, "Max"];
// mozemo da koristimo i generics za tipove niza
var korisnici;
korisnici = ["Aca", 4];
// tuples type, moze da budu bilo koje duzine i tipa
var possibleResults; // [1, -1]
possibleResults = [3, -5];
// possibleResults = [5, 10, 12]; // error, vise od 2 tipa
// object tipovi
var user = {
    name: "Max",
    age: 35,
    hobbies: ["Soprts", "Cooking"],
    role: {
        description: "admin",
        id: 5,
    },
};
// ovaj tip {} ne znaci da mora da bude objekat, znaci bilo koja vrednost koja nije undefined ili null
var val = "some text";
