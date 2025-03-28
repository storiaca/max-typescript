// type FileSource = { type: "file"; path: string };
// const fileSource: FileSource = {
//   type: "file",
//   path: "some/path/to/file.csv",
// };

// type DBSource = { type: "db"; connectionUrl: string };
// const dbSource: DBSource = {
//   type: "db",
//   connectionUrl: "some-connection-url",
// };

// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   // Open + read file OR reach out to database server
//   // if ("path" in source) {
//   if (source.type === "file") {
//     // source.path
//     // source.parh; => use that to open the file
//     return;
//   }
//   // source.connectionUrl
//   // source.connectionUrl; => to reach out to database
// }

/* Updated guard.ts */
type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === "file";
}

// funkcija isFile nece samo da vrati boolean tip, vec ceo tip FileSource, to se zove type predicate, bice boolean sa ekstra informacijom, ovo vazi za nov ts, u starijim verzijama nije bilo ovako

function loadData(source: Source) {
  // if ('path' in source) {
  if (isFile(source)) {
    // source.path
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to database
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  // .join() OR .scan() ...
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
