import React from "react";
import "./styles/TestimonialsArticle.css";

const TestimonialsArticle = ({
  paragraph,
  image,
  personName,
  status,
  withPhoto,
  withOpacity,
}) => {
  const containerStyle = withOpacity
    ? "testimonial-card mb-5 disabled"
    : "testimonial-card mb-5";

  return (
    <div className={containerStyle}>
      <p>{paragraph}</p>
      {withPhoto ? (
        <img src={image} alt="person image" />
      ) : (
        <div className="image-placeholder"></div>
      )}
      <h6>{personName}</h6>
      <p className="status">{status}</p>
    </div>
  );
};

export default TestimonialsArticle;
