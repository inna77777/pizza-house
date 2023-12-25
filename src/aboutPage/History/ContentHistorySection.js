import React, { useState } from "react";
import "./ContentHistorySection.css";

const ContentHistorySection = () => {
  const [year, setYear] = useState(0);
  const historyData = [
    {
      event: "PizzaHouse Establishment and First Happy Clients",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      event: "Organizing a Free Pizza Delivery Service in Los Angeles",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    },
    {
      event: "Offering an Extended Range of Pizzas, Burgers, and Salads",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      event: "Partnering with Organic Farms Located in California",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    },
  ];
  const changeData = (index) => {
    setYear(index);
  };
  return (
    <div className="d-flex flex-column py-5">
      <div className="containerOur our-history d-flex justify-content-center align-items-center mb-5">
        <div className="our-history-content">
          <h2>OUR HISTORY</h2>
          <h5>{historyData[year].event}</h5>
          <p>{historyData[year].description}</p>
        </div>
      </div>

      <div className="history-chronology">
        <div className="chronology-lines"></div>

        <div className="circle" onClick={() => changeData(0)}>
          {year === 0 && <div className="little-circle"></div>}
          <div className="year">
            <h4>2005</h4>
          </div>
        </div>
        <div className="chronology-lines"></div>
        <div className="circle" onClick={() => changeData(1)}>
          {year === 1 && <div className="little-circle"></div>}
          <div className="year">
            <h4>2012</h4>
          </div>
        </div>
        <div className="chronology-lines"></div>
        <div className="circle" onClick={() => changeData(2)}>
          {year === 2 && <div className="little-circle"></div>}
          <div className="year">
            <h4>2015</h4>
          </div>
        </div>
        <div className="chronology-lines"></div>
        <div className="circle" onClick={() => changeData(3)}>
          {year === 3 && <div className="little-circle"></div>}
          <div className="year">
            <h4>2019</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHistorySection;
