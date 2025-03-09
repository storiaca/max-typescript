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
