function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Aleksandar";

  constructor() {
    console.log("Create person object..");
  }
}

const pers = new Person();

console.log(pers);
