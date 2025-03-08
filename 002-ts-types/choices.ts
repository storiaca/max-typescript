// enum - samo je dostupno u typescript-u, zelimo da predstavimo malo slozenije podatke: 0 => Admin, 1 => Editor itd
enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
}

// ako uradimo Role. dobicemo predlog koje vrednosti imamo u Role
let userRole: Role = Role.Admin;
// kasnije...
userRole = Role.Guest;

// mozemo da koristimo i brojeve kao vrednosti na primer: let userRole: Role = 0; ovo je validno zato sto ce da se odnosi na Admin, ako stavimo neki veci broj kao 5 onda ce da javi gresku
// mada mozemo mi da dodelimo brojeve vrednostima, ako stavimo da je Admin = 1, onda ce brojanje da krene od 1: enum Role { Admin = 1, Editor, Guest}

/* alternativa za enum moze da bude literal tip */

let roleUser: "admin" | "editor" | "guest" = "admin";

// kasnije...
roleUser = "guest";

// mozemo da korigujemo tuple iz predhodnog primera, tako sto cemo da koristimo literal tip
// let possibleResults: [number, number] // [1, -1]
// possibleResults = [1, -1]
let possibleResults: [1 | -1, 1 | -1];
possibleResults = [1, -1];

// type aliases
type RoleUser = "admin" | "editor" | "guest" | "reader";
type UserRole = {
  name: string;
  age: number;
  role: RoleUser;
  permissions: string[];
};
function access(role: UserRole) {
  // uradi nesto...
}
