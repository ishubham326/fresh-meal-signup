import React from "react";
import CartItem from "./CartItem";
import "./cart.css";

export default function Cart({
  cartMeals,
  addToCart,
  removeFromCart,
  totalQuantity,
}) {
  const cartItems = cartMeals.map((meal) => (
    <CartItem
      key={meal.id}
      meal={meal}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  ));

  return (
    <div className="cart_sidebar">
      <h1>Cart</h1>
      <div className="cart_list">
        <div className="cart_list_items">{cartItems}</div>
        <div className="checkout">
          <p>
            {totalQuantity} Meal{totalQuantity !== 1 ? "s" : ""} in Cart
          </p>
          <button>CHECK OUT</button>
        </div>
      </div>
    </div>
  );
}
