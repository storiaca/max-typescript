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
}
// const john = new UserName("John", "Ristic");
const john = new UserName();
john.firstname = "John";
john.lastName = "Petrovic";
console.log(john.fullName);
