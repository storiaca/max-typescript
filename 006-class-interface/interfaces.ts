interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticatable;

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
