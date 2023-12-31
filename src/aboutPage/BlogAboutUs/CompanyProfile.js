import React from "react";
import { Link } from "react-router-dom";


const CompanyProfile = () => {
  return (
    <div className="px-5">
      <h2>10+ Years Of Experience</h2>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/about/our-mission">Our Mission</Link>
        </li>
        <li>
          <Link to="/about/our-goals">Our Goals</Link>
        </li>
        <li>
          <Link to="/about/our-values">Our Values</Link>
        </li>
      </ul>
      <div style={{ marginTop: "50px" }}>
        <a href="google.com" class="button  button-winona" id="contact-us-button">
          <div class="content-original">CONTACT US</div>
          <div class="content-dubbed">CONTACT US</div>
        </a>
      </div>
    </div>
  );
};

export default CompanyProfile;
