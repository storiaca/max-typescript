class UserName {
  protected _firstname: string = "";
  protected _lastName: string = "";
  //constructor(private firstname: string, private lastName: string) {}

  set firstname(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._firstname = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid last name");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstname + " " + this._lastName;
  }

  static eid = "USER";

  static greetText() {
    console.log("Hello!");
  }
}

// const john = new UserName("John", "Ristic");

console.log(UserName.eid);
UserName.greetText();

const john = new UserName();

john.firstname = "John";
john.lastName = "Petrovic";
console.log(john.fullName);

class Employee extends UserName {
  constructor(public jobTitle: string) {
    super();
    // super.firstname = "Bora";
  }

  work() {
    //...
    console.log(this._firstname);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI Element
  }
}

// let uiElement = new UIElement(); // ovo ne moze zato sto je klasa abstract

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}
