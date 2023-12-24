import React from "react";
import "./FoodFeaturesSection.css";

const FoodFeaturesSection = () => {
  return (
    <section className="food-features">
      <div className="containerOur">
        <div className="row">
          <div className="col-4 d-flex align-items-center justify-content-between">
            <i class="fa-solid fa-helicopter"> </i>
            <div className="d-flex justify-content-center flex-column p-4">
              <h4>Free Delivery</h4>
              <p>
                Lotus advenas ducunt ad gemna. Ubi est domesticus domina heu
              </p>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-between">
            <i class="fa-solid fa-pizza-slice"></i>
             <div className="d-flex justify-content-center flex-column p-4">
              <h4>20+ Pizza Options</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh
              </p>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-between">
            <i class="fa-solid fa-leaf"></i>
             <div className="d-flex justify-content-center flex-column p-4">
              <h4>Fresh Ingredients</h4>
              <p>
                Albus, dexter particulas grauiter consumere de ferox, bi-color
                abactus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodFeaturesSection;
