import React from "react";
import "./styles/PizzaArticle.css"

const PizzaArticle = ({ image, stars, name, price, discount }) => {
  return (
    <>
      <img src={image} alt="Margherita Pizza" />
      <div className="pizza-var-content-container mt-3">
        <span>{stars}</span>
        <div className="name">{name}</div>
        <div className="price">
          <span className="discount">{discount}</span>
          {price}
        </div>
      </div>
    </>
  );
};
export default PizzaArticle;