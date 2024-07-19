// Define a function named `greet` that takes two parameters: `username` and `message`.
// The `message` parameter has a default value of "Good morning".
// The function concatenates the username and message into a greeting string and returns it.
function greet(username, message = "Good morning") {
  // console.log("Hello " + username + ", " + message + "!");
  return "Hello " + username + ", " + message + "!";
}

// Call the `greet` function with "Josh" as the username and a custom message.
// The returned string is immediately logged to the console.
console.log(greet("Josh", "How are you doing today?"));

// Call the `greet` function with "Haley" as the username and a custom message.
// The returned greeting is stored in `haleyGreeting` variable.
const haleyGreeting = greet("Haley", "What's up?");

// Call the `greet` function with "Kobe" as the username and no custom message.
// Since no message is provided, the default message "Good morning" is used.
// The returned greeting is stored in `kobeGreeting` variable.
const kobeGreeting = greet("Kobe");

// Log the greetings stored in `haleyGreeting` and `kobeGreeting` to the console.
console.log(haleyGreeting);
console.log(kobeGreeting);
