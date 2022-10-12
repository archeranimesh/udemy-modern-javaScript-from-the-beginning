const val1 = 100;
const val2 = 60;
let val;

// Simple Math with Numbers
val = val1 + val2;      // Addition
val = val1 - val2;      // Substraction
val = val1 * val2;      // Multiplication
val = val1 / val2;      // Division
val = val1 % val2       // Remainder

// Math Object
val = Math.PI;

// Math function.
val = Math.round(2.4);      // 2
val = Math.round(2.8);      // 3
val = Math.ceil(2.4);       // 3
val = Math.floor(2.8);      // 2
val = Math.sqrt(64);        // 8
val = Math.abs(-3);         // 3
val = Math.pow(8,2);        // 64
val = Math.min(1,2,3,4);    // 1
val = Math.max(1,2,3,4);    // 4
val = Math.random();        // number between 0 and 1
val = Math.floor((Math.random() * 20) + 1 );      // random no between 1-20

// output
console.log(val);
console.log(typeof val);