import React, { useState, useEffect } from "react";
import "./styles/TestimonialsArticle.css";
import person1 from "../images/user-6-115x115.jpg";
import person2 from "../images/user-7-115x115.jpg";
import person3 from "../images/user-8-115x115.jpg";
import person4 from "../images/user-9-115x115.jpg";

const TestimonialsArticle = ({ setIndexCb }) => {
  const [index, setIndex] = useState(0);

  const reviewData = [
    {
      feedback:
        "PizzaHouse is the longest lasting pizza place in the city and is well run and staffed. Prices are great and allow me to keep coming back.",
      photo: person1,
      name: "Ashley Fitzgerald",
      status: "Client",
    },
    {
      feedback:
        "I am a real pizza addict, and even when I’m home I prefer your pizzas to all others. They taste awesome and are very affordable.",
      photo: person3,
      name: "Stephanie Williams",
      status: "Client",
    },
    {
      feedback:
        "PizzaHouse has amazing pizza. Not only do you get served with a great attitude, you also get delicious pizza at a great price!",
      photo: person2,
      name: "Bill Johnson",
      status: "Client",
    },
    {
      feedback:
        "PizzaHouse has great pizza. Not only do you get served with a great attitude and delivered delicious pizza, you get a great price.",
      photo: person4,
      name: "Aaron Wilson",
      status: "Client",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((oldIndex) => {
        const newIndex = oldIndex + 1;
        if (newIndex === reviewData.length) {
          return 0;
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (index) => {
    if (index == reviewData.length) {
      return 0;
    }
    if (index > reviewData.length) {
      return index - reviewData.length;
    }

    return index;
  };
  const handleChangeNextReview = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      if (newIndex === reviewData.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const handleChangePreviousReview = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      if (newIndex < 0) {
        return reviewData.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <div className="containerOur">
      <div className="testimonial-container">
        <div className="buttons-cards">
          <div onClick={handleChangePreviousReview}>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div onClick={handleChangeNextReview}>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="cards-container">
          <div className="row">
            <div className="col testimonial-card me-1 without-image">
              <p>{reviewData[getIndex(index)].feedback}</p>
              <div className="space"></div>
              <h6>{reviewData[getIndex(index)].name}</h6>
              <p className="status">{reviewData[getIndex(index)].status}</p>
            </div>
            <div className="col testimonial-card me-1 with-image">
              <p>{reviewData[getIndex(index + 1)].feedback}</p>
              <img src={reviewData[getIndex(index + 1)].photo} alt="person" />
              <h6>{reviewData[getIndex(index + 1)].name}</h6>
              <p className="status">{reviewData[getIndex(index + 1)].status}</p>
            </div>
            <div className="col testimonial-card me-1 without-image">
              <p>{reviewData[getIndex(index + 2)].feedback}</p>
              <div className="space"></div>
              <h6>{reviewData[getIndex(index + 2)].name}</h6>

              <p className="status">{reviewData[getIndex(index + 2)].status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsArticle;
