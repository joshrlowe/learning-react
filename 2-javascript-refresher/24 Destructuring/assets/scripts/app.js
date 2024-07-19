// This JavaScript code demonstrates the use of array and object destructuring.

// An array with two elements is defined.
const userNameData = ["Josh", "Lowe"];

// Destructuring the array into variables `firstName` and `lastName`.
// This is equivalent to accessing array elements by their index but provides a clearer and more concise syntax.
const [firstName, lastName] = userNameData;
console.log(firstName); // Logs "Josh"
console.log(lastName); // Logs "Lowe"

// An object representing a user with properties `name` and `age` is defined.
const user = {
  name: "Josh",
  age: 23,
};

// Destructuring the object into variables `name` and `age`.
// This extracts the properties `name` and `age` from the `user` object directly into variables of the same name.
const { name, age } = user;
console.log(name); // Logs "Josh"
console.log(age); // Logs 23

// Destructuring the object into variables `userName` and `userAge`, renaming the properties.
// This is useful when you want to avoid naming conflicts or when you prefer different variable names.
const { name: userName, age: userAge } = user;
console.log(userName); // Logs "Josh"
console.log(userAge); // Logs 23
