function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
  // return val.length; // X words
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}

const numOfWords = getLength("does this work?");
numOfWords.length; // ovo nece biti vise greska kad sm o uradili function overloads
const numItems = getLength(["Sports", "Cookies"]);
