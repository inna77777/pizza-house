import React from "react";
import "./styles/DiscountSaladSection.css";
import discountBack from "../images/bg-4.jpg";
import { FramerWrapper } from "../utils/FramerWrapper";

const DiscountSaladSection = () => {
  return (
    <div
      className="discount-section mb-5"
      style={{ backgroundImage: `url(${discountBack})` }}
    >
      <div className="containerOur">
        <div class="container text-center">
          <div class="row m-0">
            <div class="col-7"></div>

            <div class="col-5">
              <div className="discount-main">
                <FramerWrapper
                  hidden={{ opacity: 0, x: -100 }}
                  visible={{ opacity: 1, x: 0 }}
                  duration={1}
                >
                  <h2>-30% on all salads & drinks</h2>
                </FramerWrapper>
                <div className="taste-line">
                  <div className="div-line"></div>
                  <FramerWrapper
                    hidden={{ opacity: 0, y: 30 }}
                    visible={{ opacity: 1, y: 0 }}
                    duration={1}
                    delay={0.2}
                  >
                    <div>Taste some of the best PizzaHouse salads!</div>
                  </FramerWrapper>
                </div>
                <FramerWrapper
                  hidden={{ opacity: 0, x: 100 }}
                  visible={{ opacity: 1, x: 0 }}
                  duration={1}
                  delay={0.2}
                >
                  <a
                    href="google.com"
                    class="button button-winona"
                    id="discount-button"
                  >
                    <div class="content-original">CONTACT US</div>
                    <div class="content-dubbed">CONTACT US</div>
                  </a>
                </FramerWrapper>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiscountSaladSection;
