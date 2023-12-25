import React from "react";
import "./ReviewsSection.css";
import BarImage from "../../images/about/wp-say-669x447.jpg"
import ReviewsContent from "./ReviewsContent";

const ReviewsSection = () => {
  return (
    <section className="containerOur my-5">
      <div className="row">
        <div className="col-6 me-5 columns">
          <img src={BarImage} alt="bar" className="img-fluid bar-image" />
        </div>
        <div className="col-5 columns">
          <ReviewsContent />
        </div>
      </div>
    </section>
  );
};
export default ReviewsSection;
