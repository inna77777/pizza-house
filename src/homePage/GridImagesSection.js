import React from "react";
import "./styles/GridImagesSection.css";
import ingredients from "../images/gallery-1-310x585.jpg";
import interior3 from "../images/gallery-2-631x587.jpg";
import dishware from "../images/gallery-3-311x289.jpg";
import cocktails from "../images/gallery-4-631x289.jpg";
import salads from "../images/gallery-5-311x289.jpg";
import pizzasTypes from "../images/gallery-6-311x289.jpg";
import diverseMenu from "../images/gallery-7-311x289.jpg";
import { FramerWrapper } from "../utils/FramerWrapper";

const GridImagesSection = () => {
  return (
    <section className="mb-5">
      <div className="grid-container">
        <FramerWrapper
          hidden={{ opacity: 0, x: -200 }}
          visible={{ opacity: 1, x: 0 }}
          duration={0.5}
          fullWidth
        >
          <div className="hover-child">
            <img src={ingredients} alt="menu" />
            <div className="text2">
              <p>BEST INGREDIENTS</p>
              <span>TASTY PIZZA</span>
            </div>
          </div>
        </FramerWrapper>

        <FramerWrapper
          hidden={{ opacity: 0, x: 200 }}
          visible={{ opacity: 1, x: 0 }}
          duration={0.5}
          fullWidth
          overflowHidden
        >
          <div className="hover-child">
            <img src={interior3} alt="menu" />
            <div className="text2">
              <p>COMFORTABLE INTERIOR</p>
              <span>MODERN DESIGN</span>
            </div>
          </div>
        </FramerWrapper>
        <div className="inside-grid-container">
          <FramerWrapper
            hidden={{ opacity: 0, y: -50 }}
            visible={{ opacity: 1, y: 0 }}
            duration={0.5}
            fullWidth
          >
            <div className="dishware child-grid-div">
              <img src={dishware} alt="menu" />
              <div className="text2">
                <p>QUALITY DISHWARE</p>
                <span>TOP-NOTCH UTENSILS</span>
              </div>
            </div>
          </FramerWrapper>

          <FramerWrapper
            hidden={{ opacity: 0, y: 100 }}
            visible={{ opacity: 1, y: 0 }}
            duration={0.5}
            className="cocktails child-grid-div"
          >
            <img src={cocktails} alt="menu" />
            <div className="text2">
              <p>REFRESHING COCKTAILS</p>
              <span>EXCLUSIVE SELECTION</span>
            </div>
          </FramerWrapper>

          <FramerWrapper
            hidden={{ opacity: 0, y: 50 }}
            visible={{ opacity: 1, y: 0 }}
            duration={0.5}
            fullWidth
          >
            <div className="salads child-grid-div">
              <img src={salads} alt="menu" />
              <div className="text2">
                <p>EXOTIC SALADS</p>
                <span>SUMMER TASTE</span>
              </div>
            </div>
          </FramerWrapper>
          <FramerWrapper
            hidden={{ opacity: 0, x: -50 }}
            visible={{ opacity: 1, x: 0 }}
            duration={0.5}
            fullWidth
          >
            <div className="pizzasTypes child-grid-div">
              <img src={pizzasTypes} alt="menu" />
              <div className="text2">
                <p>ALL TYPES OF PIZZA</p>
                <span>SPECIAL RECIPES</span>
              </div>
            </div>
          </FramerWrapper>
          <FramerWrapper
            hidden={{ opacity: 0, x: 50 }}
            visible={{ opacity: 1, x: 0 }}
            duration={0.5}
            fullWidth
          >
            <div className="diverseMenu child-grid-div">
              <img src={diverseMenu} alt="menu" />
              <div className="text2">
                <p>DIVERSE MENU</p>
                <span>PICK YOUR FAVORITE DISH</span>
              </div>
            </div>
          </FramerWrapper>
        </div>
      </div>
    </section>
  );
};
export default GridImagesSection;
