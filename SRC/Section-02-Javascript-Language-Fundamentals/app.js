// Define Variables using, var, let, const

var name = "John Doe";  //String can be single quote or double quote.
console.log(name);
// Reassign
name = "Steve smith";
console.log(name);

// init variable
var greetings; // sets it to undefined
console.log(greetings);
greetings = "Hello!";
console.log(greetings);

// Naming Convention
// letters, numbers, $, _

// can't start with numbers
// var 1name = "name"; // Uncaught SyntaxError: identifier starts immediately after numeric literal

// can use $ or _ at the begining. But not recommended because of some external lib, like jQuery.
// _ is used in private variables.
var $name = "John Doe";
console.log($name);
var _name = "Jane Doe";
console.log(_name);

// MultiWord Variable
var firstName = "John"; // camelCase
var first_name = "Sara"; // underscore case
var FirstName = "Tome"; // Pascal Case
var firstname = "Jane"; // should be avoided.

// let works similar to var.
console.warn("LET examples");
let letName = "John Doe";  //String can be single quote or double quote.
console.log(letName);
// Reassign
letName = "Steve smith";
console.log(letName);

// undefined variable
var letGreetings; // sets it to undefined
console.log(letGreetings);
letGreetings = "Hello!";
console.log(letGreetings);

// const
console.warn("const examples");
const constName = "John Doe";
console.log(constName);
// constName = "sara"; // Uncaught TypeError: invalid assignment to const 'constName'
constName[0] = "x"; // Does not throw's error, but do not change anything.
console.log(constName);

// const variable should have assignment.
// const newName; //Uncaught SyntaxError: missing = in const declaration

// const with object
const person = {
    name: "John",
    age: 32
};
console.log(person)
// The assignement of variable is allowed, though it is const
person.name = "Jane";
person.age = 41;
console.log(person)

anotherPerson = {
    name: "Steve",
    age: 32
}
console.log(anotherPerson);
// person = anotherPerson; //Uncaught TypeError: invalid assignment to const 'person'

const newArray = [1,2,3,4,5]
console.log(newArray);
newArray.push(6);
console.log(newArray);
newArray[6] = 7;
console.log(newArray);

// newArray = [4,5,6]; // Uncaught TypeError: invalid assignment to const 'newArray'