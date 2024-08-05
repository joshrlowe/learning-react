// 1. Import the useContext hook from react.
import { useContext } from "react";

// 2. Import the CartContext from the shopping-cart-context.jsx file.
import CartContext from "../store/shopping-cart-context.jsx";

export default function Product({ id, image, title, price, description }) {
  // 3. Use the useContext hook to get the addItemToCart function from the CartContext.
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          {/* 4. Replace the handleAddItemToCart function with the addItemToCart function. */}
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
