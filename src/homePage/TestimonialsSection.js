import React from "react";
import "./styles/TestimonialsSection.css";
import TestimonialsArticle from "./TestimonialsArticle";
import { FramerWrapper } from "../utils/FramerWrapper";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section">
      <FramerWrapper
        hidden={{ opacity: 0, x: -100 }}
        visible={{ opacity: 1, x: 0 }}
        duration={1}
  
      >
        <h2>What people say</h2>
      </FramerWrapper>
      <TestimonialsArticle />
    </section>
  );
};
export default TestimonialsSection;
