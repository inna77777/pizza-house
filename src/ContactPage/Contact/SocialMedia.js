import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="media px-5">
      <div className="row gap-5">
        <div className="col-12 block">
          <h6>GET SOCIAL</h6>
          <div className="get-social">
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
        <div className="col-12 block">
          <h6>PHONE</h6>
          <div className="phone">
            <i class="fa-solid fa-phone"></i>
            <a href="tel:+1-800-1234-567">1-800-1234-567</a>
          </div>
        </div>
        <div className="col-12 block">
          <h6>E-MAIL</h6>
          <div className="email">
            <i class="fa-regular fa-envelope"></i>
            <a href="mailto:info@demolink.org">info@demolink.org</a>
          </div>
        </div>
        <div className="col-12 block">
          <h6>ADDRESS</h6>
          <div className="address">
            <i class="fa-solid fa-location-dot"></i>
            <a
              href="https://www.google.com/maps?q=6036+Richmond+Hwy,+Alexandria,+VA+22303"
              target="_blank"
              rel="noreferrer"
            >
              6036 Richmond hwy., Alexandria, VA, 2230
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
