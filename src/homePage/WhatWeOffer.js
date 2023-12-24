import React from "react";
import "./styles/WhatWeOffer.css";

const WhatWeOffer = () => {
  return (
    <section className="containerOur">
      <div className="offers">
        <div class="row text-center">
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <div className="cards-body">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="small-line"></div>
                <div className="body-i mx-3">
                  <div className="icon-container-offers">
                    <div className="icons-offers">
                      <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                  </div>
                </div>

                <div className="small-line"></div>
              </div>
              <h3 className="mb-4">Free Delivery</h3>
              <p>
                If you order more than 3 pizzas, we will gladly deliver them to
                you for free.
              </p>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <div className="cards-body">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="small-line"></div>
                <div className="big-line"></div>
                <i class="fa-regular fa-map"></i>
                <div className="big-line"></div>
                <div className="small-line"></div>
              </div>
              <h3 className="mb-4">Convenient Location</h3>
              <p>
                Our pizzeria is situated in the downtown and is very easy to
                reach even on weekends.
              </p>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <div className="cards-body">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="small-line"></div>
                <div className="big-line"></div>
                <i class="fa-solid fa-wifi"></i>
                <div className="big-line"></div>
                <div className="small-line"></div>
              </div>
              <h3 className="mb-4">Free Wi-Fi</h3>
              <p>
                We have free Wi-Fi available to all clients and visitors of our
                pizzeria.
              </p>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <div className="cards-body">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="small-line"></div>
                <div className="big-line"></div>
                <i class="fa-regular fa-thumbs-up"></i>
                <div className="big-line"></div>
                <div className="small-line"></div>
              </div>
              <h3 className="mb-4">Best Service</h3>
              <p>
                The client is our #1 priority as we deliver top-notch customer
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
