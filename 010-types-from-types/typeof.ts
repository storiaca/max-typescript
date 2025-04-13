let userName = "Aleksandar";

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["John", "Jane"],
};

// prvi nacin
// type Settings = {
//   difficulty: string;
//   minLevel: number;
//   didStart: boolean;
//   players: string[];
// };

// drugi nacin
type Settings = typeof settings;

function loadData(settings: Settings) {
  // ...
}

loadData(settings);
