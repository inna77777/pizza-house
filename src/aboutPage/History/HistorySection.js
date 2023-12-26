import React from "react";
import "./HistorySection.css";
import ContentHistorySection from "./ContentHistorySection";

const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="row mb-5">
        <div className="col-6 " style={{padding:"90px 0px", position:"relative"}}>
          <ContentHistorySection />
        </div>
        <div className="col-6 move-container">
          <div className="image-move"></div>
        </div>
      </div>
    </section>
  );
};
export default HistorySection;
