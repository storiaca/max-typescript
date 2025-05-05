function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Aleksandar";

  constructor() {
    console.log("Create person object..");
  }
}

const pers = new Person();

console.log(pers);
