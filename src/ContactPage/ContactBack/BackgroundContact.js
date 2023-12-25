import React from "react";
import "./BackgroundContact.css";

const BackgroundContact =()=>{
  return (
    <section className="back">
      <div className="move-back">
        <div className="about-us-background d-flex justify-content-center align-items-center flex-column">
          <h1 className="text-white">Contacts</h1>
          <div className="grey-line"></div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center p-3"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        <a
          href="../../Home.js"
          className="text-decoration-none mx-3 fs-5 fw-medium"
          style={{ color: "#777777" }}
        >
          HOME
        </a>
        <i
          class="fa-solid fa-arrow-right mx-3"
          style={{ color: "#000000" }}
        ></i>
        <h5 className="my-0 mx-3">CONTACTS</h5>
      </div>
    </section>
  );
}
export default BackgroundContact;