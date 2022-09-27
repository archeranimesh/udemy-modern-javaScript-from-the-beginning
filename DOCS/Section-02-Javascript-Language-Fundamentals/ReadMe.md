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

If you want to measure the time of a block of code, you can do it using the `.time()` * `.timeEnd()` function. 

```javascript
console.time("Hello");
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
    console.log([1,2,3,4]);
console.timeEnd("Hello");
```