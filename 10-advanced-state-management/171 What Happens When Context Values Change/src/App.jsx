import { useState } from "react";

import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Shop from "./components/Shop.jsx";

import CartContext from "./store/shopping-cart-context.jsx";

import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  /*
    We can create our own context value object which contains state and updating functions, then pass that object to the value prop
    for the context provider.

    This way, we can access the state value and the functions to update the state in the consuming components.
    Below, handleAddItemToCart can now be accessed via addItemToCart in all consuming components.

    See Product.jsx for the implementation.
   */
  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
  };

  return (
    /*
      To link the context of our application to state, we could pass a state value into the context provider's value prop:
      <CartContext.Provider value={shoppingCart}>

      But, this is not an ideal practice because we can access the state value, but we cannot update it using the functions we created.
      Look at the solution above, which creates a context value object that contains the state value and the functions to update the state.
     */
    <CartContext.Provider value={ctxValue}>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={handleAddItemToCart}>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
