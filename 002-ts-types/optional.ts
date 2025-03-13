/* Optional values */
function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

// nullish coalescing - ?? ovo je js operator
//let input = null;
let input = "";

// const didProvideInput = input || false;
const didProvideInput = input ?? false;

// ovaj operator ?? proverava da li je sa njegove leve strane vrednost null ili undefined, sve ostalo uzima u obzir cak i prazan string, sto ga dosta razlikuje od || operatora, zato ce vrednost da bude prazan string
