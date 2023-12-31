import React from "react";
import "./styles/PizzaVariations.css";
import Margherita from "../images/product-1-161x162.png";
import MashroomPizza from "../images/product-2-161x162.png";
import HawaiianPizza from "../images/product-3-161x162.png";
import PestoPizza from "../images/product-4-161x162.png";
import PizzaArticle from "./PizzaArticle";
import { FramerWrapper } from "../utils/FramerWrapper";

const PizzaVariations = () => {
  return (
    <section className="pizzaVar">
      <div className="containerOur">
        <FramerWrapper
          hidden={{ opacity: 0, y: 80 }}
          visible={{ opacity: 1, y: 0 }}
          duration={0.5}
          fullWidth
        >
          <h2>SELECTED PIZZAS</h2>
        </FramerWrapper>

        <div className="row d-flex justify-content-center align-items-center flex-md-row flex-column row-gap-4">
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <FramerWrapper
              hidden={{ opacity: 0, x: -100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              delay={0.4}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
              overflowHidden={false}
            >
              <div className="pizza-var-container">
                <PizzaArticle
                  image={Margherita}
                  stars="⭐⭐⭐⭐"
                  name="Margherita Pizza"
                  price="$24.00"
                />
              </div>
            </FramerWrapper>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <FramerWrapper
              hidden={{ opacity: 0, x: -100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              delay={0.3}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
              overflowHidden={false}
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
            </FramerWrapper>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <FramerWrapper
              hidden={{ opacity: 0, x: -100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              delay={0.2}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
              overflowHidden={false}
            >
              <div className="pizza-var-container">
                <PizzaArticle
                  image={HawaiianPizza}
                  stars="⭐⭐⭐⭐"
                  name="Hawaiian Pizza"
                  price="$24.00"
                />
              </div>
            </FramerWrapper>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{ maxWidth: "300px" }}
          >
            <FramerWrapper
              hidden={{ opacity: 0, x: -100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              delay={0.1}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
              overflowHidden={false}
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
            </FramerWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PizzaVariations;
