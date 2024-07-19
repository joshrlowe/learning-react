// Demonstrates the use of functions as first-class citizens in JavaScript, allowing them to be passed around like variables.

// Arrow Function
// Using an arrow function as a callback for setTimeout. The arrow function is anonymous and executed after a 2-second delay.
setTimeout(() => {
  alert("Hello!");
}, 2000);

// Manually created function
// Defining a function using arrow syntax and storing it in a variable 'greet'.
// This function can be passed around and used as a value.
const greet = () => {
  alert("Hello!");
};
// Passing the 'greet' function as a callback to setTimeout. The function will be invoked after a 2-second delay.
setTimeout(greet, 2000);

// Passing function itself as a value, not invoking the function
// Demonstrates that functions can be treated as values in JavaScript. Here, a function is defined but not immediately invoked.
// Defining a function is not invoking it, nor is defining an anonymous function

// Defining a higher-order function 'greeter' that accepts another function 'greetFn' as its parameter.
// This demonstrates how functions can be passed as arguments to other functions.
function greeter(greetFn) {
  // Invoking the passed-in function.
  greetFn();
}

// Calling 'greeter' with an arrow function as its argument. The arrow function logs 'Hello!' to the console.
// This showcases the flexibility of functions in JavaScript, allowing for inline function definitions and passing them as arguments.
greeter(() => console.log("Hello!"));
