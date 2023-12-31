import React from "react";
import "./styles/OurMenu.css";

import salad from "../images/menu-1-370x278.jpg";
import pizza from "../images/menu-2-370x278.jpg";
import burger from "../images/menu-3-370x278.jpg";
import dessert from "../images/menu-4-370x278.jpg";
import drink from "../images/menu-5-370x278.jpg";
import seaFood from "../images/menu-6-370x278.jpg";
import { ReactComponent as SaladIcon } from "../images/salad.svg";
import { ReactComponent as PizzaIcon } from "../images/pizza.svg";
import { ReactComponent as BurgerIcon } from "../images/burger.svg";
import { ReactComponent as DessertIcon } from "../images/ice-cream.svg";
import { ReactComponent as DrinkIcon } from "../images/drink.svg";
import { ReactComponent as SeaFoodIcon } from "../images/seafood.svg";
import { FramerWrapper } from "../utils/FramerWrapper";

const OurMenu = () => {
  return (
    <div className="containerOur mb-5">
      <FramerWrapper
        hidden={{ opacity: 0, x: -100 }}
        visible={{ opacity: 1, x: 0 }}
        duration={1}
        fullWidth
      >
        <div className="heading-menu">Our menu</div>
      </FramerWrapper>
      <div className="row ">
        <div
          className="col-4 col-md-3 col-container  "
          onClick={() => (window.location = "/")}
        >
          <FramerWrapper
            hidden={{ opacity: 0, y: 200 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
            fullWidth
          >
            <div className="image-menu">
              <img src={salad} alt="menu" className="image-menu" />
            </div>
            <div className="icon-menu-div">
              <span className="text-container">
                <span className="icon-container">
                  <SaladIcon className="article-icon" />
                </span>
                <span className="text">Salads</span>
              </span>
            </div>
          </FramerWrapper>
        </div>
        <div
          className="col-4 col-md-3 col-container"
          onClick={() => (window.location = "/")}
        >
          <FramerWrapper
            hidden={{ opacity: 0, y: -200 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
            fullWidth
            ease="easeInOut"
          >
            <div className="image-menu">
              <img src={pizza} alt="menu" className="image-menu" />
            </div>
            <div className="icon-menu-div">
              <span className="text-container">
                <span className="icon-container">
                  <PizzaIcon className="article-icon" />
                </span>
                <span className="text">Pizzas</span>
              </span>
            </div>
          </FramerWrapper>
        </div>
        <div
          className="col-4 col-md-3 col-container  "
          onClick={() => (window.location = "/")}
        >
          <FramerWrapper
            hidden={{ opacity: 0, y: 200 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
            fullWidth
          >
            <div className="image-menu">
              <img src={burger} alt="menu" className="image-menu" />
            </div>
            <div className="icon-menu-div">
              <span className="text-container">
                <span className="icon-container">
                  <BurgerIcon className="article-icon" />
                </span>
                <span className="text">Burgers</span>
              </span>
            </div>
          </FramerWrapper>
        </div>
      </div>
      <div className="row ">
        <div
          className="col-4 col-md-3 col-container  "
          onClick={() => (window.location = "/")}
        >
          <FramerWrapper
            hidden={{ opacity: 0, y: -200 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
            fullWidth
          >
            <div className="image-menu">
              <img src={dessert} alt="salad-im" className="image-menu" />
            </div>
            <div className="icon-menu-div">
              <span className="text-container">
                <span className="icon-container">
                  <DessertIcon className="article-icon" />
                </span>
                <span className="text">Desserts</span>
              </span>
            </div>
          </FramerWrapper>
        </div>
        <div
          className="col-4 col-md-3 col-container  "
          onClick={() => (window.location = "/")}
        >
          <FramerWrapper
            hidden={{ opacity: 0, y: 200 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
            fullWidth
          >
            <div className="image-menu">
              <img src={drink} alt="menu" className="image-menu" />
            </div>
            <div className="icon-menu-div">
              <span className="text-container">
                <span className="icon-container">
                  <DrinkIcon className="article-icon" />
                </span>
                <span className="text">Drinks</span>
              </span>
            </div>
          </FramerWrapper>
        </div>
        <div
          className="col-4 col-md-3 col-container  "
          onClick={() => (window.location = "/")}
        >
          <FramerWrapper
            hidden={{ opacity: 0, y: -200 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
            fullWidth
          >
            <div className="image-menu">
              <img src={seaFood} alt="menu" className="image-menu" />
            </div>
            <div className="icon-menu-div">
              <span className="text-container">
                <span className="icon-container">
                  <SeaFoodIcon className="article-icon" />
                </span>
                <span className="text">Seafood</span>
              </span>
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};
export default OurMenu;
