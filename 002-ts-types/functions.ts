/* Functions */
function add(a: number, b: number): number {
  return a + b;
}

// void return
function log(message: string): void {
  console.log(message);
}

// "never" type
// never znaci da se ova funkcija nikada nece zavrsiti jer baca gresku
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
