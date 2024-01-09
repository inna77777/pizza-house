import React from "react";
import "./Footer.css";
import logo from "../images/logo-inverse-198x66.png";
import like from "../images/like2.jpg";
import { FramerWrapper } from "../utils/FramerWrapper";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containerOur ">
        <div className="info-container ">
          <div className="offer">
            <FramerWrapper
              hidden={{ opacity: 0, x: -100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
            >
              <span className="heading-span">What We Offer</span>
            </FramerWrapper>
            <FramerWrapper
              hidden={{ opacity: 0, y: 100 }}
              visible={{ opacity: 1, y: 0 }}
              duration={1}
              fullWidth
            >
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="/">Pizzas</a>
                  </li>
                  <li>
                    <a href="/">Burgers</a>
                  </li>
                  <li>
                    <a href="/">Salads</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/">Drinks</a>
                  </li>
                  <li>
                    <a href="/">Seafood</a>
                  </li>
                  <li>
                    <a href="/">Ice cream</a>
                  </li>
                </ul>
              </div>
            </FramerWrapper>
          </div>
          <div className="info">
            <FramerWrapper
              hidden={{ opacity: 0, x: -100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
            >
              <span className="heading-span">Information</span>
            </FramerWrapper>
            <FramerWrapper
              hidden={{ opacity: 0, y: 100 }}
              visible={{ opacity: 1, y: 0 }}
              duration={1}
              fullWidth
            >
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Latest News</a>
                  </li>
                  <li>
                    <a href="/">Our menu</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Shop</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                </ul>
              </div>
            </FramerWrapper>
          </div>
          <div className="newsletter">
            <FramerWrapper
              hidden={{ opacity: 0, x: -100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
            >
              <span className="heading-span">Newsletter</span>
            </FramerWrapper>
            <p>Sign up today for the latest news and updates.</p>
            <div className="mail-container">
              <FramerWrapper
                hidden={{ opacity: 0, y: 25 }}
                visible={{ opacity: 1, y: 0 }}
                duration={1}
                fullWidth
              >
                <input
                  type="email"
                  placeholder="Enter your E-mail"
                  className="email-input"
                />
              </FramerWrapper>
              <FramerWrapper
                hidden={{ opacity: 0, x: 100 }}
                visible={{ opacity: 1, x: 0 }}
                duration={1}
                fullWidth
              >
                <a
                  href="google.com"
                  class="button  button-winona"
                  id="button-email"
                >
                  <div class="content-original">SUBSCRIBE</div>
                  <div class="content-dubbed">SUBSCRIBE</div>
                </a>
              </FramerWrapper>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="containerOur">
        <div className="data">
          <FramerWrapper
            hidden={{ opacity: 0, x: -100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
          >
            <img src={logo} alt="Pizza House logo" />
          </FramerWrapper>
          <FramerWrapper
            hidden={{ opacity: 0, x: 100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
          >
            <div className="like">
              <img src={like} alt="like-icon" />
              <span>9.4K</span>
            </div>
          </FramerWrapper>
          <FramerWrapper
            hidden={{ opacity: 0, y: 25 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
          >
            <div>
              <i class="fa-solid fa-phone" />
              <a href="tel:+1 718-999-3939">+1 718-999-3939</a>
            </div>
          </FramerWrapper>
          <FramerWrapper
            hidden={{ opacity: 0, y: -25 }}
            visible={{ opacity: 1, y: 0 }}
            duration={1}
          >
            <div>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:info@demolink.org">info@demolink.org</a>
            </div>
          </FramerWrapper>
          <div className="icons-container">
            <FramerWrapper
              hidden={{ opacity: 0, x: 100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
            >
              <div className="icons">
                <div>
                  <i class="fa-brands fa-facebook" />
                </div>
                <div>
                  <i class="fa-brands fa-twitter" />
                </div>
                <div>
                  <i class="fa-brands fa-instagram" />
                </div>
                <div>
                  <i class="fa-brands fa-google-plus-g" />
                </div>
              </div>
            </FramerWrapper>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="containerOur ">
        <div className="geo-info">
          <FramerWrapper
            hidden={{ opacity: 0, x: -100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
          >
            <div>514 S. Magnolia St. Orlando, FL 32806</div>
          </FramerWrapper>
          <FramerWrapper
            hidden={{ opacity: 0, x: 100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
          >
            <div>© 2023. All Rights Reserved. Design by TemplateMonster</div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};
export default Footer;
