/* Functions */
function add(a, b) {
    return a + b;
}
// void return
function log(message) {
    console.log(message);
}
// "never" type
// never znaci da se ova funkcija nikada nece zavrsiti jer baca gresku
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// functions as types, mozemo da sacuvamo funkciju kao vrednost
var logMsg = function (msg) {
    console.log(msg);
};
function performJob(cb) {
    // uradi nesto
    cb("Job Done!");
}
performJob(logMsg);
var user = {
    name: "Bora",
    age: 38,
    greet: function () {
        console.log("Hello there!");
        return this.name;
    },
};
user.greet();
