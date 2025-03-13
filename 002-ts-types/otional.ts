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

// nullish coalescing - ??
//let input = null;
let input = "";

// const didProvideInput = input || false;
const didProvideInput = input ?? false;
