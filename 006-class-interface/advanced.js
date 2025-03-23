"use strict";
class UserName {
    firstname;
    lastName;
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstname + " " + this.lastName;
    }
}
const john = new UserName("John", "Ristic");
console.log(john.fullName);
