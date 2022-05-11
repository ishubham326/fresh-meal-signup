import React from "react";
import { Grid } from "@mui/material";

import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import data from "./data";
import "./products.css";
export default function Products() {
  const { products } = data;
  const [cartMeals, setCartMeals] = React.useState([]);
  const totalQuantity = cartMeals.reduce((a, c) => a + c.qty, 0);
  const addToCart = (product) => {
    const inCart = cartMeals.find((item) => item.id === product.id);
    if (inCart) {
      setCartMeals(
        cartMeals.map((item) =>
          item.id === product.id ? { ...inCart, qty: inCart.qty + 1 } : item
        )
      );
    } else {
      setCartMeals([...cartMeals, { ...product, qty: 1 }]);
    }
    // console.log(cartMeals);
  };

  const removeFromCart = (product, remove = false) => {
    const inCart = cartMeals.find((item) => item.id === product.id);
    if (inCart.qty === 1 || remove) {
      setCartMeals(cartMeals.filter((item) => item.id !== product.id));
    } else {
      setCartMeals(
        cartMeals.map((item) =>
          item.id === product.id ? { ...inCart, qty: inCart.qty - 1 } : item
        )
      );
    }
  };

  return (
    <Grid container className="product_cart_container">
      <div className="products">
        <ProductList products={products} addToCart={addToCart} />
      </div>
      <div className="cart">
        <Cart
          cartMeals={cartMeals}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          totalQuantity={totalQuantity}
        />
      </div>
    </Grid>
  );
}
