import React from "react";
import "./FoodFeaturesSection.css";
import { FramerWrapper } from "../../utils/FramerWrapper";

const FoodFeaturesSection = () => {
  return (
    <section className="food-features">
      <div className="containerOur">
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-lg-between">
            <div className="me-4">
              <FramerWrapper
                hidden={{ opacity: 0, y: 50 }}
                visible={{ opacity: 1, y: 0 }}
                duration={1}
              >
                <i class="fa-solid fa-helicopter"> </i>
              </FramerWrapper>
            </div>
            <div>
              <FramerWrapper
                hidden={{ opacity: 0, y: 60 }}
                visible={{ opacity: 1, y: 0 }}
                duration={1}
                fullWidth
                delay={0.2}
              >
                <div className="d-flex justify-content-center flex-column p-lg-4 p-1">
                  <h4>Free Delivery</h4>
                  <p>
                    Lotus advenas ducunt ad gemna. Ubi est domesticus domina heu
                  </p>
                </div>
              </FramerWrapper>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-lg-between">
            <div className="me-4">
              <FramerWrapper
                hidden={{ opacity: 0, y: 70 }}
                visible={{ opacity: 1, y: 0 }}
                duration={1}
                delay={0.4}
              >
                <i class="fa-solid fa-pizza-slice"></i>
              </FramerWrapper>
            </div>
            <div>
              <FramerWrapper
                hidden={{ opacity: 0, y: 80 }}
                visible={{ opacity: 1, y: 0 }}
                duration={1}
                delay={0.6}
                fullWidth
              >
                <div className="d-flex justify-content-center flex-column p-lg-4 p-1">
                  <h4>20+ Pizza Options</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh
                  </p>
                </div>
              </FramerWrapper>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-lg-between">
            <div className="me-4">
              <FramerWrapper
                hidden={{ opacity: 0, y: 70 }}
                visible={{ opacity: 1, y: 0 }}
                duration={1}
                delay={0.8}
              >
                <i class="fa-solid fa-leaf"></i>
              </FramerWrapper>
            </div>
            <div>
              <FramerWrapper
                hidden={{ opacity: 0, y: 80 }}
                visible={{ opacity: 1, y: 0 }}
                duration={1}
                delay={1}
                fullWidth
              >
                <div className="d-flex justify-content-center flex-column p-lg-4 p-1">
                  <h4>Fresh Ingredients</h4>
                  <p>
                    Albus, dexter particulas grauiter consumere de ferox,
                    bi-color abactus.
                  </p>
                </div>
              </FramerWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodFeaturesSection;
