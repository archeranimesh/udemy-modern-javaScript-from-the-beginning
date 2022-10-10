# JavaScript Language Fundamentals #

## File Setup ##

JavaScript code is inserted into the HTML file. This can be done in 2 ways.

1. Directly under a script tag, like this

```javascript
<script>
    alert("Hello!!");
</script>
```

2. In a seperate file, refrenced in the HTML code like this.

```javascript
<script src="app.js"></script>
```

The path to the script file is relative to the index HTML file.

## Using The Console ##

When we write the code, we also need to debug it. All the brower supports some form of console. 

We can even manipulate the DOM, using console as shown below.

```javascript
document.querySelector('h1').style.color = "red" 
```

In addition to manipulating the DOM, we can also add logs in our code, which can be printed into the console.

We can print, normal strings, number and boolean onto the console as shown below.

```javascript
console.log("hello, World");
console.log(123);
console.log(true);
```

We can also print the value of a variable.

```javascript
var greeting = "hello";
console.log(greeting);
```

Value of an array can be printed like this.

```javascript
console.log([1,2,3,4]);
```

We can print the object in 2 ways. Using a normal console.
```javascript
console.log({a:1, b:2});
```

Objects can also be printed as a table using the `.table` function.
```javascript
console.table({a:1, b:2});
```

Error and warings also can be indicated using `.error()` & `.warn()` function. It outputs the logs in red and yellow color.

```javascript
console.error("This is an error");
console.warn("This is a warning.");
```

Logs can also be cleared from the console using a `.clear()` function like this.

```javascript
console.clear();
```

If you want to measure the time of a block of code, you can do it using the `.time()` & `.timeEnd()` function. 

```javascript
console.time("Hello");
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
console.timeEnd("Hello");
```

## Variables - var, let & const ##

`var` is the traditional way of declaring variable. We will study it for historical reason. We will use `let` in the code.

### String Variable ###

A string variable can be assigned like this.
* `var name = "John Doe";`

You can also reassign the variable like this.
* `name = "Steve smith";`

We can use both `""` double quotes and `''` single quotes for string literals. You should not mix the quotes.

### variable intialization ###

When we do not give a value for initialization to a variable, it is initialized with `undefined`.

* `var greetings; // sets it to undefined`

### Naming Convention ###

Variables names can have alphanumeric character and 2 special characters, `_` and `$`.

Variable names should not start with numbers, like `1name`, it will throw a `SyntaxError`.

Variables name can start with `$`, but it should be avoided, as lot of 3rd party libraries also use it, like this.

* `var $name = "John Doe";`

`_` also should be avoided at the begining of the variable names. It is preferred to be used with private variables. It can be used like this,

* `var _name = "Jane Doe";`

#### MultiWord Variable ####

The most preferred way to declare multiword variables in JavaScript is camelCase, like this, `firstName`.

There are other ways to declare variables.

* underscore - `first_name`
* Pascal Case - `FirstName`
* lower case - `firstname`, should be avoided.

### `let` Variables ###

`let` is very similar to `var` in all sense. 

We can create variable's very similar to `var`, like this.

* `let letName = "John Doe";`

We can also reassign the variable like this

* `letName = "Steve smith";`

`undefined` variable is created by not initilizing the variable.
* `var letGreetings;`

### `const` Variable ###
`const` is a way to define a constant in JavaScript. This means we cannot reassign the variable.

We can initialize a `const` like this.
* `const constName = "John Doe";`

If you try reassign the variable `constName`, it throws an exception, `Uncaught TypeError: invalid assignment to const 'constName'`.

We can change `const` objects and arrarys like this.

```javascript
const person = {
    name: "John",
    age: 32
};
person.name = "Jane";
person.age = 41;

const newArray = [1,2,3,4,5];
newArray.push(6);
```

We cannot do reassignment of the object or array like this.

```javascript
const newArray = [1,2,3,4,5]
newArray = [4,5,6];
// Uncaught TypeError: invalid assignment to const 'newArray'
```

## Data types in JavaScript ##

Two types of Data Types:- 

* Primitive Data Type
    * Stored directly on the location the variables accesses.
    * Stored on the Stack.
* Reference Data Type
    * Data is actually stored on a Heap.
    * A reference (pointer) is provided to the variable to access the variable.


### Primitive Data Type ###

The different primitive data types are.
* String - All string literals, in `''` or `""`.

```JavaScript
// String
const name = "John Doe";
console.log(typeof name)
```
* Number - Decimal, whole number, all are Numbers data type in JS.
```JavaScript
// Numbers
const age = 40;
console.log(typeof age); // Prints Number
```
```JavaScript
// Numbers
const age = "40";
console.log(typeof age); // Prints String
```

* Boolean - `True` & `False`.
```JavaScript
// Boolean
const hasKids = true;
console.log(typeof hasKids);
```

* Null - Empty Value.
```JavaScript
// Null - https://stackoverflow.com/questions/18808226/why-is-typeof-null-object
const car = null;
console.log(typeof car); // It should not return object, but it is a bug in js.
```

* Undefined - When a variable is declared but not assigned a value.
```JavaScript
// undefined
let test;
console.log(typeof test);
```
* Sumbols (ES6) - New entry in ES6.
```JavaScript
// Symbol
const sym = Symbol();
console.log(typeof sym);
```

### Reference Types ###

The various reference types are:-
* arrays
```JavaScript
// Array
const numbers = [1,2,3,4];
console.log(typeof numbers);
```
* Object Literals
```JavaScript
// Objects
const address = {
    city: "Boston",
    state: "MA"
};
console.log(typeof address);
```

* Functions
* Dates.
```JavaScript
// Date.
const today = new Date();
console.log(today);
console.log(typeof today);
```

### Dynamically Typed Language ###

Javascript is a Dynamically typed language, which means, if a variables holds an Arrary, and some other point the same variable can hold a string. 

Type is not specified while creation of the variables. The values have types not the variables. 

TypeScript, Flow are some superset of JS which allows Static