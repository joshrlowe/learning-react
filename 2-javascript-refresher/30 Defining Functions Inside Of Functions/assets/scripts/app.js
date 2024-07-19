// Demonstrates defining a function within another function in JavaScript.

function init() {
  // Inner function definition
  // 'greet' is a function defined within the 'init' function, showcasing function scoping.
  function greet() {
    // Logs 'Hello' to the console when called.
    console.log("Hello");
  }
  // Calling the inner function 'greet' within the 'init' function.
  // This is possible because 'greet' is accessible in the scope of 'init'.
  greet();
}

// Attempting to call 'greet' outside its scope.
// This line is commented out because it would result in a ReferenceError.
// 'greet' is not accessible in the global scope, only within 'init'.
// greet(); // This will throw an error because greet is not defined in the global scope.

// Calling the outer function 'init'.
// This will log 'Hello' to the console because it triggers the 'init' function,
// which in turn calls the 'greet' function defined within its scope.
init(); // This will log 'Hello' to the console because greet is defined and called within the init function.
