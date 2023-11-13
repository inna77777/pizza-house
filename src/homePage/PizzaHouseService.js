import React from "react";
import "./styles/PizzaHouseService.css";
import serviceImage from "../images/bg-3.jpg";

const PizzaHouseService = () => {
  
  return (
    <div
      className="service mb-5"
      style={{ backgroundImage: `url(${serviceImage})` }}
    >
      <div className="containerOur">
        <div class="container text-center">
          <div class="row m-0">
            <div class="col-7"></div>

            <div class="col-5">
              <div className="service-main">
                <h2>Best atmosphere</h2>
                <p>
                  PizzaHouse is the place of the best pizza and high-quality
                  service.
                </p>
                <div className="founder">
                  <div></div>
                  <div>Ben Smith, Founder</div>
                </div>
                <a href="/">VIEW OUR SERVICES</a>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PizzaHouseService;
