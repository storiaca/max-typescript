interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}

  login() {}
  logout() {}
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
