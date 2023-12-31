import React from "react";
import "./styles/WhatWeOffer.css";
import { FramerWrapper } from "../utils/FramerWrapper";

const WhatWeOffer = () => {
  return (
    <section className="containerOur">
      <div className="offers">
        <div class="row text-center">
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <FramerWrapper
              hidden={{ opacity: 0, y: 50 }}
              visible={{ opacity: 1, y: 0 }}
              duration={1}
              fullWidth
            >
              <div className="cards-body">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="small-line"></div>
                  <div className="body-i mx-3">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <div className="b-lines"></div>
                  </div>

                  <div className="small-line"></div>
                </div>
                <h3 className="mb-4">Free Delivery</h3>
                <p>
                  If you order more than 3 pizzas, we will gladly deliver them
                  to you for free.
                </p>
              </div>
            </FramerWrapper>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <FramerWrapper
              hidden={{ opacity: 0, y: 50 }}
              visible={{ opacity: 1, y: 0 }}
              duration={1}
              fullWidth
              delay={0.2}
            >
              <div className="cards-body">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="small-line"></div>
                  <div className="body-i mx-3">
                    <i class="fa-regular fa-map"></i>
                    <div className="b-lines"></div>
                  </div>
                  <div className="small-line"></div>
                </div>
                <h3 className="mb-4">Convenient Location</h3>
                <p>
                  Our pizzeria is situated in the downtown and is very easy to
                  reach even on weekends.
                </p>
              </div>
            </FramerWrapper>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <FramerWrapper
              hidden={{ opacity: 0, y: 50 }}
              visible={{ opacity: 1, y: 0 }}
              duration={1}
              fullWidth
              delay={0.4}
            >
              <div className="cards-body">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="small-line"></div>
                  <div className="body-i mx-3">
                    <i class="fa-solid fa-wifi"></i>
                    <div className="b-lines"></div>
                  </div>
                  <div className="small-line"></div>
                </div>
                <h3 className="mb-4">Free Wi-Fi</h3>
                <p>
                  We have free Wi-Fi available to all clients and visitors of
                  our pizzeria.
                </p>
              </div>
            </FramerWrapper>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center flex-column cards">
            <FramerWrapper
              hidden={{ opacity: 0, y: 50 }}
              visible={{ opacity: 1, y: 0 }}
              duration={1}
              fullWidth
              delay={0.6}
            >
              <div className="cards-body">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="small-line"></div>
                  <div className="body-i mx-3">
                    <i class="fa-regular fa-thumbs-up"></i>
                    <div className="b-lines"></div>
                  </div>
                  <div className="small-line"></div>
                </div>
                <h3 className="mb-4">Best Service</h3>
                <p>
                  The client is our #1 priority as we deliver top-notch customer
                  service.
                </p>
              </div>
            </FramerWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
