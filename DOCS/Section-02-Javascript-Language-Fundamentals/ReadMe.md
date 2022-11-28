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
* Symbols (ES6) - New entry in ES6.
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

## Type Conversion ##
We can convert the type of variable while execution.

### Number, Bool, Date, Array To String ###

* Numbers along with Boolean, Date, and Array can be converted to string, by using `String()` or `.toString()` function.

* Numbers
```javascript
val = String(5);
val = String(4+4);
val = (5).toString();

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // Works on String
```

* Boolean
```javascript
val = String(true);
val = (true).toString();

// Output
console.log(val); // true is printed.
console.log(typeof val);
console.log(val.length); // Works on String
```

* Date 
```javascript
val = String(new Date());

// Output
console.log(val); // Complete date is converted to string.
console.log(typeof val);
console.log(val.length); // Works on String
```

* Arrary
```javascript
val = String([1,2,3,4]);

// Output
console.log(val); // The array is converted to string, with the ,
console.log(typeof val);
console.log(val.length); // Works on String
```

### String, Boolean, `null`, Arrary to Numbers ###

We can use the `Numbers()` and `parseInt()` funtion to convert Strings, Boolean, `null` to Numbers.

* Strings.
```javascript
val = Number("5");

// Output
console.log(val); // 5
console.log(typeof val);
console.log(val.toFixed()); // Works on Numbers
```
* Boolean.
```javascript
val = Number(true); 

// Output
console.log(val); // 1, true prints 1, False prints 0
console.log(typeof val);
console.log(val.toFixed()); // Works on Numbers
```

* `null`
```javascript
val = Number(null);

// Output
console.log(val); // 0,
console.log(typeof val);
console.log(val.toFixed()); // Works on Numbers
```

* Strings and arrays, which cannot be converted give `NaN`, Not a Number value.
```javascript
val = Number("hello");      // NaN, when the value cannot be converted.
val = Number([1,2,3,4,5]);  // NaN, when the value cannot be converted.

// Output
console.log(val); // 0,
console.log(typeof val);
console.log(val.toFixed()); // Works on Numbers
```

### `parseInt()` and `parseFloat` ###
* If we want to extract the Integer part or the complete floating value from a string we can use these function.

* `parseInt()`, As you see below even for `"100.50"` it will return `100`. The integer part.

```javascript
val = parseInt("100");  // 100
val = parseInt("100.50"); // still 100

// Output
console.log(val); // 100
console.log(typeof val);
console.log(val.toFixed()); // Works on Numbers
```

* `parseFloat()` : It will return the proper floating part also.
```javascript
val = parseFloat("100.50"); // 100.5

// Output
console.log(val); // 100.5
console.log(typeof val);
console.log(val.toFixed()); // Works on Numbers
```

### Type coercion ###

When 2 different types are used in a equation, one of the type is converted to another one, this is called Type coercion.

```javascript
const val1 = String(5);
const val2 = 4;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);    // 54, it converted to string.
```

In the above case, the equation gives `54` in place of `9`, as one of the operand was string.

## Numbers & `Math` Object ##

We need to many times perform mathematical operations, as in all languages even JavaScript also supports this. The most popular operations are

* Addition : `100 + 60` 
* Substraction : `100 - 60`
* Multiplication : `100 * 60`
* Division : `100 / 60`
* Modulo : `100 % 60`

We also have a `Math` object with very helpful functions and constants.

* PI : `Math.PI`, returns the value of Pi.
* `.round()` : `Math.round(2.4);` gives 2 but `Math.round(2.8);` gives 3.
* `.ceil()` : `Math.ceil(2.4);` gives 3, it returns the upper bound.
* `.floor()` : `Math.floor(2.8);` gives 2, it returns the lower bound.
* `.sqrt()` : `Math.sqrt(64);` gives 8, the square root of `64`.
* `.abs()` : `Math.abs(-3);`, gives 3, the absolute value.
* `.pow()` : `Math.pow(8,2);`, gives `64`, `8` raised to `2`.
* `.min()` : `Math.min(1,2,3,4);`, gives `1`, the minimum number.
* `.max()` : `Math.max(1,2,3,4);`, gives `4`, the maximum number.
* `.random()` : `Math.random();`, gives any random number between `0` to `1`.
* Random number between 2 numbers.
    * `Math.floor((Math.random() * 20) + 1 )` 

## String Method & Concatenation ##
String and its method are very important in the whole JavaScript language as a lot of time we deai with String.

The first operation we do with Strings is **Concatenation**.

### Concatenation ###
This adds to string together.
```javascript
const firstName = "John";
const lastName = "Doe";
val = firstName + " " +lastName;    
console.log(val);       //John Doe
```

We can also append using the `+=` operator.
```javascript
val = "John ";
val += "Doe" 
console.log(val);       //John Doe
```



### Escape ###

Lot of time in a String, we want to change the default meaning of the symbol. Like `'` is used to enclose a string. Now how do we show the characters like `'s` in a string. We escape the symbol by using `\`.

```javascript
val = 'That\'s awesome, I can\'t wait';     
console.log(val); //// That's awesome, I can't wait
```

### String Property & Methods ###
* Length : `"John".length` returns 4, the length string.
* concatenate : 
```javascript
const firstName = "John";
const lastName = "Doe";
val = firstName.concat(" ", lastName);
console.log(val);       //John Doe
```
* Change Case, we can change the complete string to upper case or lower case.
```javascript
const firstName = "John";
// change case.
val = firstName.toUpperCase();  // JOHN
val = firstName.toLowerCase();  // john
```
* String as Array, we can get string at a particular index.
```javascript
const firstName = "John";
val = firstName[0];     // J
```

* indexOf : `"John".indexOf(n)` returns 3, the index where the literal is present.
    * if two character are same in a string like `l` in `"william"`, `indexOf` will return the first index.
    * to get the last index we have to use, `lastIndexOf()`.

* charAt() : `"John".charAt(2)`, return `h`, the character at `2`nd index.
    * we can also use `charAt()` to get the last literal in the string like this, `John".charAt(John".length - 1);`
    * we can also use `slice(-1)` to get the last literal in the string.

* substring() : we can get a part of the string using `substring()` 
```javascript
const firstName = "John";
val = firstName.substring(0,2); // Jo, 2 is not included.
```

* slice() : it also does same job as `substring()` but also handles `-` indexes.
```javascript
const firstName = "John";
val = firstName.slice(0,2);     // Jo
val = firstName.slice(-3);      // ohn
```

* split : we cans split a string into array based on a delimiter.
```javascript
const str = "hello my name is John Doe."
val = str.split(" ");       // [ "hello", "my", "name", "is", "John", "Doe." ]
```

* replace : we can search and replace a character.
```javascript
const str = "hello my name is John Doe."
val = str.replace("John", "Jane");
console.log(val);       // "hello my name is Jane Doe."
```

* includes : checks is a string is available in a string
```javascript
const str = "hello my name is John Doe."
val = str.includes("hello");    // true
```

## Template Literals ##

Inserting HTML from Javascript is little difficult and error prone, as we edit raw HTML text. This is how it looks before ES6

```javascript
// without template string
html = "<ul><li> Name: " + name +" </li><li> Age: " + age +"</li> <li> Job: " + job +" </li> <li> City: " + city +" </li> </ul>"

// or, with better formatting.
// without template string
html = "<ul>" +
    "<li> Name: " + name +" </li> "+ 
    "<li> Age: " + age +"</li> "+ 
    "<li> Job: " + job +" </li> "+
    "<li> City: " + city +" </li> "+ 
"</ul>"
```

Even with proper formatting, the above is error prone. We have solution in ES6, by doing this.

```javascript
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
    </ul?
`;

document.body.innerHTML = html;
```

The above is called **String Literal**. We can intialize a String literal using ```` symbol.

The variable we want to reference can be accessed using the `${}` token, like `${name}`.

We can also put expression inside `${}` token, like, `${2+2}` and it will evaluate to `4`.

Function can also be invoked from `${}` token, like `${hello()}` and it will replace with whatever value the function returns.

We can also have ternary operation, like `${age > 30 ? "Over 30" : "Under 30"}`.