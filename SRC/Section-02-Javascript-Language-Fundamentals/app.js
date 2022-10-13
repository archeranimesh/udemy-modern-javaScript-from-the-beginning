const firstName = "John";
const lastName = "Doe";
const age = 30;
const str = "hello my name is John Doe."

val = firstName + lastName; // JohnDoe

// Concatenation
val = firstName + " " +lastName;    //John Doe

// Append
val = "John ";
val += "Doe"

// Sentence
val = "Hello, My name is " +firstName + " and I am " +age +" old.";     //Hello, My name is John and I am 30 old.

// Escaping
val = 'That\'s awesome, I can\'t wait';     // That's awesome, I can't wait

// String Property
// length
val = firstName.length;     // 4

// concat
val = firstName.concat(" ", lastName);

// change case.
val = firstName.toUpperCase();  // JOHN
val = firstName.toLowerCase();  // john

// characters from string
val = firstName[0];     // J

// indexOf
val = firstName.indexOf("n");   // 3, -1 if not found.

val = "William"
val = val.indexOf("l");     // 2
val = "William"
val = val.lastIndexOf("l"); // 3, if there are two char, it will return last one.

// charAt
val = firstName.charAt(2); // h

// Last Character of the string
val = firstName.charAt(firstName.length - 1);
val = firstName.slice(-1);

// Substring
val = firstName.substring(0,2); // Jo, 2 is not included.

// Slice
val = firstName.slice(0,2);     // Jo
// last 3 digit
val = firstName.slice(-3);

// Split
val = str.split(" ");       // [ "hello", "my", "name", "is", "John", "Doe." ]

// replace
val = str.replace("John", "Jane");

// includes
val = str.includes("hello");    // true

console.log(val);