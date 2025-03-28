function getLength(val: string | any[]) {
  // return val.length; // X words
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}

const numOfWords = getLength("does this work?");
// numOfWords.length;
const numItems = getLength(["Sports", "Cookies"]);
