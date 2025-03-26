"use strict";
class AuthenticatableUser {
    userName;
    email;
    password;
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    login() { }
    logout() { }
}
function authenticate(user) {
    user.login();
}
let user;
user = {
    email: "test@exampel.com",
    password: "abc1",
    login() {
        // dodaj logiku za login
    },
    logout() {
        // dodaj logiku za logout
    },
};
