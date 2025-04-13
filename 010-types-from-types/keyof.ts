type User = { name: string; age: number };
type userKeys = keyof User;

let validKey: userKeys;

validKey = "name";
validKey = "age";
