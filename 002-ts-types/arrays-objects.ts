// arrays
let hobbies = ["Sports", "Cooking"];

// ako probamo da dodamo broj u niz dobicemo gresku
// znaci da je ts vec odredio da je niz koji ima samo tipove string: hobbies: string[]
// hobbies.push(10);

// mozemo da definsemo kojeg ce tipa da budu vrednosti u nizu na primer stingove i brojeve:
let users: (string | number)[];

users = [1, "Max"];
