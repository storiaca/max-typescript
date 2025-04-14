// const appUser = {
//   name: "Aleksandar",
//   age: 37,
//   permissions: [{ id: "p1", title: "Admin", description: "Admin access" }],
// };
// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  pemissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["pemissions"];
