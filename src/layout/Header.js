import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo-198x66.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <nav className="nav-bar">
      <div className="containerOur nav-container">
        <div className="logo">
          <img src={logo} alt="logo Pizza House" className="logo-image" />
        </div>
        <div className="right-panel">
          <div className="contact-info">
            <div className="data-point">
              <i class="fa-solid fa-phone" />
              +1 718-999-3939
            </div>
            <div className="data-point">
              <i class="fa-solid fa-location-dot" />
              514 S. Magnolia St. Orlando, FL 32806
            </div>
            <div className="social-media">
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
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
              <div className="hover-line" />
            </li>
            <li>
              <Link to="/about">About us</Link>
              <div className="hover-line" />
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
              <div className="hover-line" />
            </li>
            {!token ? (
              <>
                <li>
                  <Link to="/login">login</Link>
                  <div className="hover-line" />
                </li>
                <li>
                  <Link to="/signUp">signUp</Link>
                  <div className="hover-line" />
                </li>
              </>
            ) : (
              <li>
                <a onClick={logout} style={{ cursor: "pointer" }}>
                  Logout
                </a>
                <div className="hover-line" />
              </li>
            )}
            <li>
              <i class="fa-solid fa-bars fa-xs humburger"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
