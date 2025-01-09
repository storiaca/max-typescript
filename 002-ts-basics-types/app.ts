let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; // error
if (typeof userInput === "string") {
  userName = userInput;
}
