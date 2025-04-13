type User = { name: string; age: number };
type userKeys = keyof User;

let validKey: userKeys;

validKey = "name";
validKey = "age";

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (val === undefined || val == null) {
    throw new Error("Accessing undefined or null value");
  }
  return val;
}

const data = { id: 1, isStored: false, values: [1, -5, 10] };
const isStored = getProp(data, "isStored");

const user = { name: "Aleksandar", age: 38 };

const val = getProp(user, "age");
