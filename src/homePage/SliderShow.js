import React, { useState, useEffect } from "react";
import "./styles/SliderShow.css";
import pizza1 from "../images/slide-1-1920x753.jpg";
import pizza2 from "../images/slide-2-1920x753.jpg";

const SliderShow = () => {
  const [slide, setSlide] = useState(0);
  const pizzaData = [
    {
      heading: "PERFECT PIZZA",
      desc: "Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants!",
      image: pizza1,
    },
    {
      heading: "QUALITY INGREDIENTS",
      desc: "We use only the best ingredients to make one-of-a-kind pizzas for our customers.",
      image: pizza2,
    },
  ];

  const nextSlide = () => {
    if (slide == pizzaData.length - 1) {
      return setSlide(0);
    }
    setSlide(slide + 1);
  };

  // const changeSlide = (index) => {
  //   if (index == pizzaData.length - 1) {
  //     return setSlide(0);
  //   }
  //   setSlide(index + 1);
  // };
  useEffect(() => {
    const intervalTime = setInterval(() => {
      const nextSlideShow = (slide + 1) % pizzaData.length;
      nextSlide(nextSlideShow);
    }, 4000);
    return () => clearInterval(intervalTime);
  }, [slide, pizzaData]);

  return (
    <section>
      <div
        id="pizza-carousel"
        style={{ backgroundImage: `url(${pizzaData[slide].image})` }}
      >
        <div className="info-pizza-container">
          <div className="pizza-info">
            <div className="container-button-image d-flex justify-content-center align-items-center">
              <div>
                <img
                  className="pizza-image"
                  src={
                    pizzaData[slide == 0 ? pizzaData.length - 1 : slide - 1]
                      .image
                  }
                />
              </div>
              <div
                className={`button1 ${slide === 0 ? "active" : ""}`}
                onClick={nextSlide}
              >
                <div>
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </div>
            </div>

            <div className="container-pizza d-flex justify-content-start align-items-start">
              <div className="row d-flex justify-content-start align-items-start">
                <div className="col-12 p-0">
                  <div className="info-pizza">
                    <h1>{pizzaData[slide].heading}</h1>
                    <p className="pe-5">{pizzaData[slide].desc}</p>
                    <a href="/">VIEW OUR MENU</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-button-image2 d-flex justify-content-center align-items-center">
              <div
                className={`button2  ${slide === 1 ? "active" : ""}`}
                onClick={nextSlide}
              >
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div>
                <img
                  className="pizza-image"
                  style={{ width: "100%" }}
                  src={
                    pizzaData[pizzaData.length - 1 == slide ? 0 : slide + 1]
                      .image
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderShow;
