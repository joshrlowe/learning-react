# Introducing the useReducer Hook

## Problem

Currently, we have our context implemented, and we use state to manage this context. The state management functions can become complex, leading to code that is hard to read and maintain. The larger issue is the redundancy. Most context providers follow a similar pattern:

```js
import { useState } from "react";

export default function Provider({ children }) {
    const [someState, setSomeState] = useState("some-initial-value");

    function doSomethingToState() {
        setSomeState(prevState => {
            // logic to compute new state
        });
    }

    return (
        // Provide context to children
    );
}
```

We frequently use state and set state within nested functions. This can be simplified using reducers.

## What is a Reducer?

A reducer is a function that reduces one or more complex values to a simpler one.

For example:

- **Array to Sum**:
  - Input: `[5, 10, 100]`
  - Output: `115`

In the context of React, a reducer function is used with the `useReducer` hook to manage state transitions more predictably and concisely.

## Implementing a Reducer

Let's see how a reducer is implemented in `shopping-cart-context.jsx`. We define a reducer function to use with the `useReducer` hook:

```js
import { useReducer } from "react";

const initialState = {
  cart: [],
  total: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // logic to add item to cart
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      // logic to remove item from cart
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
}

export default function ShoppingCartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(item) {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }

  function removeFromCart(item) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }

  return (
    <ShoppingCartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
```

## Benefits of using `useReducer`

1. **Improved Readability**: State transitions are defined in a single place (the reducer function), making it easier to understand and maintain.
2. **Predictable State Management**: The state transitions follow a consistent pattern, reducing the likelihood of bugs.
3. **Simplified Context Providers**: Context providers become simpler and less redundant by utilizing reducers.

By leveraging the `useReducer` hook, we can manage state more effectively and write cleaner, more maintainable code.
