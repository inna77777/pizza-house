import React from "react";
import "./PersonOfTeam.css";

const PersonOfTeam = ({ image, heading, paragraph }) => {
  return (
    <div className="col-3 text-center persons d-flex justify-content-center align-items-center flex-column">
      <img src={image} alt="person" className="img-fluid mb-4" />
      <h6>{heading}</h6>
      <p>{paragraph}</p>
      <div className="social-media-icons">
        <a href="https://www.facebook.com">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.google.com">
          <i class="fa-brands fa-google-plus-g"></i>
        </a>
      </div>
    </div>
  );
};
export default PersonOfTeam;
