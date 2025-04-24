// const mainUserName = "Aleksandar";

// const greeting = `Hi there, ${mainUserName}`;

type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

// type FilePermissions =
//   | "no-read-write"
//   | "read-no-write"
//   | "no-read-no-write"
//   | "read-write";

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void;
};
