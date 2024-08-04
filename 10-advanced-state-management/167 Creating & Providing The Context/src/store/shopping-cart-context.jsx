import { createContext } from "react";

// Uppercase name is a convention for context because it will be used as a component
// Object can contain any data you want to share with other components, e.g., strings, numbers, arrays, objects, etc.
const CartContext = createContext({
  items: [],
});

export default CartContext;
