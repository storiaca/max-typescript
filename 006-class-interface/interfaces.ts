interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
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

function authenticate(user: Authenticatable) {
  user.login();
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
