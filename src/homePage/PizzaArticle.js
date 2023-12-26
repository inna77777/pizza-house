import React from "react";
import "./styles/PizzaArticle.css"

const PizzaArticle = ({ image, stars, name, price, discount }) => {
  return (
    <div className="relative-pizza-container d-flex justify-content-center align-items-center flex-column">
      <img src={image} alt="Margherita Pizza" />
      <div className="pizza-var-content-container mt-3">
        <span>{stars}</span>
        <div className="name">{name}</div>
        <div className="price">
          <span className="discount">{discount}</span>
          {price}
        </div>
      </div>
      <div className="pizzas-buttons">
        <div className="d-flex justify-content-center text-center flex-column row-gap-3">
          <a href="/" className="add">Add to cart</a>
          <a href="/" className="view">View product</a>
        </div>
      </div>
    </div>
  );
};
export default PizzaArticle;