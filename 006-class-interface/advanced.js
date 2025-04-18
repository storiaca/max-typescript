"use strict";
class UserName {
    _firstname = "";
    _lastName = "";
    //constructor(private firstname: string, private lastName: string) {}
    set firstname(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._firstname = name;
    }
    set lastName(name) {
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
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstname = "Bora";
    }
    work() {
        //...
        console.log(this._firstname);
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI Element
    }
}
// let uiElement = new UIElement(); // ovo ne moze zato sto je klasa abstract
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
