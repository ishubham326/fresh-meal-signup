import React from "react";
import ProductCard from "./ProductCard";

import "./productList.css";
export default function ProductList({ products, addToCart }) {
  const [filters, setFilters] = React.useState("All");

  const productCards = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      addToCart={addToCart}
    ></ProductCard>
  ));

  return (
    <>
      <h1>{filters} Meals</h1>
      <div className="filter_box">
        <p>Filter By: </p>
        <input
          className="filter_input"
          type="radio"
          value="All"
          name="filters"
          id="filter1"
          onChange={(e) => setFilters(e.target.value)}
        />
        <label className="filter_label" for="filter1">
          All
        </label>
        <input
          className="filter_input"
          type="radio"
          value="Chicken"
          name="filters"
          id="filter2"
          onChange={(e) => setFilters(e.target.value)}
        />
        <label className="filter_label" for="filter2">
          Chicken
        </label>
        <input
          className="filter_input"
          type="radio"
          value="Pancake"
          name="filters"
          id="filter3"
          onChange={(e) => setFilters(e.target.value)}
        />
        <label className="filter_label" for="filter3">
          Pancake
        </label>
      </div>
      <div className="card_list">
        {filters === "All"
          ? productCards
          : productCards.filter((card) =>
              card.props.product.title
                .toLowerCase()
                .includes(filters.toLowerCase())
            )}
      </div>
    </>
  );
}
