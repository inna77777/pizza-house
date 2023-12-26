import React from "react";
import "./styles/PizzaVariations.css";
import Margherita from "../images/product-1-161x162.png";
import MashroomPizza from "../images/product-2-161x162.png";
import HawaiianPizza from "../images/product-3-161x162.png";
import PestoPizza from "../images/product-4-161x162.png";
import PizzaArticle from "./PizzaArticle";

const PizzaVariations = () => {
  return (
    <section className="pizzaVar">
      <div className="containerOur">
        <h2>SELECTED PIZZAS</h2>

        <div className="row d-flex justify-content-center align-items-center flex-md-row flex-column row-gap-4">
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <div className="pizza-var-container">
              <PizzaArticle
                image={Margherita}
                stars="⭐⭐⭐⭐"
                name="Margherita Pizza"
                price="$24.00"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <div className="pizza-var-container container-mashroom-pizza">
              <div className="new">
                <p>NEW</p>
              </div>
              <PizzaArticle
                image={MashroomPizza}
                stars="⭐⭐⭐⭐⭐"
                name="Mashroom Pizza"
                price="$24.00"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <div className="pizza-var-container">
              <PizzaArticle
                image={HawaiianPizza}
                stars="⭐⭐⭐⭐"
                name="Hawaiian Pizza"
                price="$24.00"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <div className="pizza-var-container container-pesto-pizza">
              <div className="sale">
                <p>SALE</p>
              </div>
              <PizzaArticle
                image={PestoPizza}
                stars="⭐⭐⭐⭐⭐"
                name="Pesto Pizza"
                discount="$40.00"
                price=" $24.00"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PizzaVariations;
