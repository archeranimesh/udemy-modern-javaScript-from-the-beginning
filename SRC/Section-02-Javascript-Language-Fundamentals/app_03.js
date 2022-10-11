// String
const name = "John Doe";
console.log(typeof name)

// Numbers
const age = 40;
console.log(typeof age);

// Number as String
const ageAgain = "40";
console.log(typeof ageAgain);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null - https://stackoverflow.com/questions/18808226/why-is-typeof-null-object
const car = null;
console.log(typeof car); // It should not return object, but it is a bug in js.

// undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// Reference Types - Objects
// Array
const numbers = [1,2,3,4];
console.log(typeof numbers);

// Objects
const address = {
    city: "Boston",
    state: "MA"
};
console.log(typeof address);

// Date.
const today = new Date();
console.log(today);
console.log(typeof today);