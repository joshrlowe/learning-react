// Named exports allow for exporting multiple values. Each named export can be imported individually by other modules.
// Here, `apiKey` and `url` are exported as named exports.
export let apiKey = "abc123";
export let url = "https://www.google.com";

// Default export allows for a single value to be exported from a module.
// This value can be imported without using curly braces.
// In this case, a string "abc123" is the default export of the module.
export default "abcdef123456";
