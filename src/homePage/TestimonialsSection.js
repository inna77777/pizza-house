import React from "react";
import "./styles/TestimonialsSection.css";
import TestimonialsArticle from "./TestimonialsArticle";
import person1 from "../images/user-6-115x115.jpg";
import person2 from "../images/user-7-115x115.jpg";
import person3 from "../images/user-8-115x115.jpg";

const TestimonialsSection = () => {
  return (
    <section>
      <h2>What people say</h2>
      <div className="containerOur">
        <div className="testomonial-container">
          <div className="buttons-cards">
            <div>
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="cards-container">
            <TestimonialsArticle
              paragraph="PizzaHouse is the longest lasting pizza place in the city and is well run and staffed. Prices are great and allow me to keep coming back."
              image={person1}
              personName="Ashley Fitzgerald"
              status="Client"
              withOpacity
            />

            <TestimonialsArticle
              paragraph="I am a real pizza addict, and even when I’m home I prefer your pizzas to all others. They taste awesome and are very affordable."
              image={person3}
              personName="Stephanie Williams"
              status="Client"
              withPhoto
            />

            <TestimonialsArticle
              paragraph="PizzaHouse has amazing pizza. Not only do you get served with a great attitude, you also get delicious pizza at a great price!"
              image={person2}
              personName="Bill Johnson"
              status="Client"
              withOpacity
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
