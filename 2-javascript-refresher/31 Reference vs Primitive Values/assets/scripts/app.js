// Demonstrates the difference between reference and primitive values in JavaScript.

// Assigns a primitive string value to 'userMessage'.
let userMessage = "Hello!";

// Reassigns 'userMessage' to a new primitive string value.
userMessage = "Hello";

// Concatenates ' World!' to 'userMessage', creating a new string.
// This demonstrates that operations on primitive values result in new values rather than altering the original.
userMessage = userMessage.concat(" World!");

// Primitive values are immutable and cannot be altered once created.
// Reassignment creates a new string in memory, discarding the old one.

/* Primitive values in JavaScript:
 * - Strings
 * - Numbers
 * - Booleans
 * - Undefined
 * - Null
 * - Symbols
 * - BigInt
 */

// Creates an array, which is a reference value.
const hobbies = ["Sports", "Cooking"];

// Adds a new item to the array. This modifies the array in place.
hobbies.push("Reading");

/*
 * Reference values like arrays are mutable and can be modified directly.
 * Unlike primitives, operations on reference values can alter the original value without reassignment.
 *
 * For reference values, the memory address is stored in the variable.
 * The underlying value (i.e., the object/array)  can be edited without changing that address.
 * The value can therefore be edited without reassigning the variable.
 *
 * The const keyword prevents reassignment of the variable, not modification of the object it references.
 * Since the reference (address) to the array doesn't change when modifying its contents, it's allowed under const.
 *
 * Reference values in JavaScript:
 * - Objects
 * - Arrays
 * - Functions
 * - Dates
 */
