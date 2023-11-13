import React from "react";
import "./Footer.css";
import logo from "../images/logo-inverse-198x66.png";
import like from "../images/like2.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containerOur ">
        <div className="info-container ">
          <div className="offer">
            <span className="heading-span">What We Offer</span>
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
          </div>
          <div className="info">
            <span className="heading-span">Information</span>
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
          </div>
          <div className="newsletter">
            <span className="heading-span">Newsletter</span>
            <p>Sign up today for the latest news and updates.</p>
            <div className="mail-container">
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="email-input"
              />
              <button className="button-email1 button">
                <span>SUBSCRIBE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="containerOur">
        <div className="data">
          <img src={logo} alt="Pizza House logo" />
          <div className="like">
            <img src={like} alt="like-icon" />
            <span>9.4K</span>
          </div>
          <div>
            <i class="fa-solid fa-phone" />
            <a href="tel:+1 718-999-3939">+1 718-999-3939</a>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:info@demolink.org">info@demolink.org</a>
          </div>
          <div className="icons-container">
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
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="containerOur ">
        <div className="geo-info">
          <div>514 S. Magnolia St. Orlando, FL 32806</div>
          <div>© 2023. All Rights Reserved. Design by TemplateMonster</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
