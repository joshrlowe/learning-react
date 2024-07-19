// Define an array of hobbies
const hobbies = ["Sports", "Cooking"];

// Define another array with a new hobby
const newHobbies = ["Reading"];

// Attempt to merge the two arrays, but this creates an array of arrays instead of a single merged array
const mergedHobbies = [hobbies, newHobbies];
console.log(mergedHobbies);

// Correct way to merge arrays using the spread operator to create a new array containing all elements from both arrays
mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

// Define an object representing a user
const user = {
  name: "Josh",
  age: 23,
};

// Extend the user object with an additional property using the spread operator
// This creates a new object `extendedUser` that includes all properties from `user` plus the `isAdmin` property
const extendedUser = {
  isAdmin: true,
  ...user,
};
// Note: The spread operator is used here to copy properties from the existing `user` object into the new `extendedUser` object
