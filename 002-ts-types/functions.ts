/* Functions */
function add(a: number, b: number): number {
  return a + b;
}

// void return
function log(message: string): void {
  console.log(message);
}

// "never" type
// never znaci da se ova funkcija nikada nece zavrsiti jer baca gresku
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

// functions as types, mozemo da sacuvamo funkciju kao vrednost
const logMsg = (msg: string) => {
  console.log(msg);
};

function performJob(cb: (m: string) => void) {
  // uradi nesto
  cb("Job Done!");
}

performJob(logMsg);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Bora",
  age: 38,
  greet() {
    console.log("Hello there!");
    return this.name;
  },
};

user.greet();
