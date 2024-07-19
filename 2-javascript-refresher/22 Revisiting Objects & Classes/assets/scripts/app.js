// Define constants for user's name and age
const userName = "Josh";
const userAge = 23;

// Create a user object with properties name, age, and a greet method
const user = {
  name: "Josh", // User's name
  age: 23, // User's age
  greet() {
    // Method to print a greeting message
    console.log("Hi, I am " + this.name);
  },
};

// Log the entire user object to the console
console.log(user);
// Log just the user's name to the console
console.log(user.name);
// Call the greet method of the user object
user.greet();

// Define a Person class with a constructor and a greet method
class Person {
  constructor(userName, userAge) {
    // Constructor takes userName and userAge as parameters
    this.name = userName; // Assigns userName to this.name
    this.age = userAge; // Assigns userAge to this.age
  }

  greet() {
    // Method to print a greeting message
    console.log("Hi, I am " + this.name);
  }
}

// Create an instance of the Person class with name 'Josh' and age 23
const person = new Person("Josh", 23);
// Log the entire person object to the console
console.log(person);
// Log just the person's name to the console
console.log(person.name);
// Call the greet method of the person object
person.greet();
