// Can use import syntax because of type="module" in script tag in HTML file
// Can use special syntax for multiple exports
// import { apiKey, url as contentUrl } from './util.js';

// as keyword is used to rename the imported variable - called the alias keyword

// Example of importing everything from a module as a namespace
// This approach is useful when you need to import many things from a module.
// It creates a namespace object (`util` in this case) that contains all the exports from the imported module.
import * as util from "./util.js";
console.log(util.apiKey); // Accessing a named export from the namespace
console.log(util.url); // Accessing another named export from the namespace

// Example of default import
// Default exports can be imported with any name. This is because there's only one default export per module.
// This syntax is useful for modules that export a single entity, like a class or a function.
// Here, `apiKey` is the name chosen for the default export from './util.js'
// import apiKey from './util.js';
