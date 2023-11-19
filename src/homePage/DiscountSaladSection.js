import React from "react";
import "./styles/DiscountSaladSection.css";
import discountBack from "../images/bg-4.jpg"


const DiscountSaladSection =()=>{
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
                <h2>-30% on all salads & drinks</h2>
                <div className="taste-line">
                  <div></div>
                  <div>Taste some of the best PizzaHouse salads!</div>
                </div>
                <a href="/">CONTACT US</a>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DiscountSaladSection;