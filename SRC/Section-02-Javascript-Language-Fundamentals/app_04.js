let val;

// Number to string
    val = String(5);
    val = String(4+4);

    // Bool to string
    val = String(true);

    // Date to String
    val = String(new Date());

    // Arrary to String
    val = String([1,2,3,4]);

    // toString
    val = (5).toString();
    val = (true).toString();

// String to Number.
val = Number("5");
val = Number(true);     // 1
val = Number(false);    // 0
val = Number(null);     // 0
val = Number("hello");  // NaN, when the value cannot be converted.
val = Number([1,2,3,4,5]);  // NaN, when the value cannot be converted.


// parseInt()
val = parseInt("100");  // 100
val = parseInt("100.50"); // still 100
val = parseFloat("100.50"); // 100.5



// output
console.log(val);
console.log(typeof val);
// console.log(val.length); // Works on String
console.log(val.toFixed());


// Type coercion

const val1 = String(5);
const val2 = 4;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);    // 56, it converted to string.