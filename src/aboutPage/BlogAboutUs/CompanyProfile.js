import React from "react";
import { Link } from "react-router-dom";
import { FramerWrapper } from "../../utils/FramerWrapper";


const CompanyProfile = () => {
  return (
    <div className="px-5">
      <h2>10+ Years Of Experience</h2>
      <ul>
        <li>
          <FramerWrapper
            hidden={{ opacity: 0, x: 100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
            fullWidth
          >
            <Link to="/about">About Us</Link>
          </FramerWrapper>
        </li>

        <li>
          <FramerWrapper
            hidden={{ opacity: 0, x: 100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
            fullWidth
            delay={0.2}
          >
            <Link to="/about/our-mission">Our Mission</Link>
          </FramerWrapper>
        </li>
        <li>
          <FramerWrapper
            hidden={{ opacity: 0, x: 100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
            fullWidth
            delay={0.4}
          >
            <Link to="/about/our-goals">Our Goals</Link>
          </FramerWrapper>
        </li>
        <li>
          <FramerWrapper
            hidden={{ opacity: 0, x: 100 }}
            visible={{ opacity: 1, x: 0 }}
            duration={1}
            fullWidth
            delay={0.6}
          >
            <Link to="/about/our-values">Our Values</Link>
          </FramerWrapper>
        </li>
      </ul>
      <div style={{ marginTop: "50px" }}>
        <FramerWrapper
          hidden={{ opacity: 0, x: 100 }}
          visible={{ opacity: 1, x: 0 }}
          duration={1}
          fullWidth
          delay={0.8}
        >
          <a
            href="google.com"
            class="button  button-winona"
            id="contact-us-button"
          >
            <div class="content-original">CONTACT US</div>
            <div class="content-dubbed">CONTACT US</div>
          </a>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default CompanyProfile;
