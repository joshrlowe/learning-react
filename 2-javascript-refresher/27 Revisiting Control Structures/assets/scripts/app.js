const password = prompt("Please enter a password:");

// The if-else statement below is a control structure that determines which block of code to execute based on the condition.
// It checks the value of the `password` variable against specific strings.
if (password === "Hello") {
  // This block executes if `password` exactly matches the string 'Hello'
  console.log("Hello works");
} else if (password === "hello") {
  // This block executes if `password` exactly matches the string 'hello', demonstrating case sensitivity in comparisons
  console.log("hello works");
} else {
  // This block executes if `password` does not match any of the above conditions, acting as a default or fallback
  console.log("Access not granted.");
}

// An array `hobbies` is defined with two elements: 'Sports' and 'Cooking'
const hobbies = ["Sports", "Cooking"];

// The for-of loop is a control structure for iterating over iterable objects like arrays.
// Here, it iterates over each element in the `hobbies` array.
for (const hobby of hobbies) {
  // For each iteration, the current element (hobby) is logged to the console.
  console.log(hobby);
}
