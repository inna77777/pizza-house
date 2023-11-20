import React from "react";
import "./styles/GridImagesSection.css";
import ingredients from "../images/gallery-1-310x585.jpg";
import interior from "../images/gallery-2-631x587.jpg";
import dishware from "../images/gallery-3-311x289.jpg";
import cocktails from "../images/gallery-4-631x289.jpg";
import salads from "../images/gallery-5-311x289.jpg";
import pizzasTypes from "../images/gallery-6-311x289.jpg";
import diverseMenu from "../images/gallery-7-311x289.jpg";

const GridImagesSection = () => {
  return (
    <section className="mb-5">
      <div className="grid-container">
        <div className="hover-child">
          <img src={ingredients} alt="" />
          <div className="text2">
            <p>BEST INGREDIENTS</p>
            <span>TASTY PIZZA</span>
          </div>
        </div>
        <div className="hover-child">
          <img src={interior} alt="" />
          <div className="text2">
            <p>COMFORTABLE INTERIOR</p>
            <span>MODERN DESIGN</span>
          </div>
        </div>
        <div className="inside-grid-container">
          <div className="dishware">
            <img src={dishware} alt="" />
            <div className="text2">
              <p>QUALITY DISHWARE</p>
              <span>TOP-NOTCH UTENSILS</span>
            </div>
          </div>
          <div className="cocktails">
            <img src={cocktails} alt="" />
            <div className="text2">
              <p>REFRESHING COCKTAILS</p>
              <span>EXCLUSIVE SELECTION</span>
            </div>
          </div>
          <div className="salads">
            <img src={salads} alt="" />
            <div className="text2">
              <p>EXOTIC SALADS</p>
              <span>SUMMER TASTE</span>
            </div>
          </div>
          <div className="pizzasTypes">
            <img src={pizzasTypes} alt="" />
            <div className="text2">
              <p>ALL TYPES OF PIZZA</p>
              <span>SPECIAL RECIPES</span>
            </div>
          </div>
          <div className="diverseMenu">
            <img src={diverseMenu} alt="" />
            <div className="text2">
              <p>DIVERSE MENU</p>
              <span>PICK YOUR FAVORITE DISH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GridImagesSection;
