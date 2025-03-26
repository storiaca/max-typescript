type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessFileData = FileData & Status; // ovako mozemo da kombinujemo dva tipa
type AccessedDatabaseData = DatabaseData & Status;
