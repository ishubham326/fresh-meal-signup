import React from "react";
import "./productCard.css";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product_card">
      <img src={product.image.src} alt={product.name}></img>
      <h3>{product.title}</h3>
      <p>Relevalant information regarding the dish</p>
      <div className="prod_info">
        <div className="spec">
          <p>Cal: 320</p>
          <p>Protein: 50g</p>
          <p>Carb: 24g</p>
        </div>
        <button onClick={() => addToCart(product)}>Add Meal</button>
      </div>
    </div>
  );
}
