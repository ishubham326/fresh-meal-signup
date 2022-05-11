import React from "react";
import "./cartItems.css";
export default function CartItem({ meal, addToCart, removeFromCart }) {
  return (
    <div className="cart_item">
      <div className="item_description">
        <img src={meal.image.src} alt="" />
        <div>
          <p>{meal.title}</p>
          <button onClick={() => removeFromCart(meal, true)}>
            Remove Meal
          </button>
        </div>
      </div>
      <div className="quantity_buttons">
        <button onClick={() => removeFromCart(meal)}>-</button>
        <span>{meal.qty}</span>
        <button onClick={() => addToCart(meal)}>+</button>
      </div>
    </div>
  );
}
