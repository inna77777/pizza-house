import React from "react";
import "./styles/SliderShow.css";
import pizza1 from "../images/slide-1-1920x753.jpg";

const SliderShow = () => {
  return (
    <section id="pizza-carousel" style={{ backgroundImage: `url(${pizza1})` }}>
      <div className="info-pizza-container">
        <div className="pizza-info">
          <div className="button1">
            <div>
              <i class="fa-solid fa-arrow-left"></i>
            </div>
          </div>

          <div className="container-pizza d-flex justify-content-start align-items-start">
            <div class="row d-flex justify-content-start align-items-start">
              <div class="col-12 p-0">
                <div className="info-pizza">
                  <h1>PERFECT PIZZA</h1>
                  <p className="pe-5">
                    Experience the taste of a perfect pizza at PizzaHouse, one
                    of the best restaurants!
                  </p>
                  <a href="/">VIEW OUR MENU</a>
                </div>
              </div>
            </div>
          </div>

          <div className="button2">
            <div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SliderShow;
