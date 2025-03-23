class UserName {
  constructor(private firstname: string, private lastName: string) {}

  get fullName() {
    return this.firstname + " " + this.lastName;
  }
}

const john = new UserName("John", "Ristic");

console.log(john.fullName);
