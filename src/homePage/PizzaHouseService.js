import React from "react";
import "./styles/PizzaHouseService.css";
import serviceImage from "../images/bg-3.jpg";
import { FramerWrapper } from "../utils/FramerWrapper";

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
                <FramerWrapper
                  hidden={{ opacity: 0, x: 100 }}
                  visible={{ opacity: 1, x: 0 }}
                  duration={1}
                >
                  <h2>Best atmosphere</h2>
                </FramerWrapper>
                <p>
                  PizzaHouse is the place of the best pizza and high-quality
                  service.
                </p>
                <div className="founder">
                  <div className="line"></div>
                  <FramerWrapper
                    hidden={{ opacity: 0, x: 100 }}
                    visible={{ opacity: 1, x: 0 }}
                    duration={1}
                    delay={0.3}
                  >
                    <div>Ben Smith, Founder</div>
                  </FramerWrapper>
                </div>
                <FramerWrapper
                  hidden={{ opacity: 0, y: 100 }}
                  visible={{ opacity: 1, y: 0 }}
                  duration={0.5}
                  ease="linear"
                  delay={0.3}
                >
                  <div>
                    <a
                      href="google.com"
                      class="button  button-winona"
                      id="button-service"
                    >
                      <div class="content-original">View Our Services</div>
                      <div class="content-dubbed">View Our Services</div>
                    </a>
                  </div>
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
export default PizzaHouseService;
