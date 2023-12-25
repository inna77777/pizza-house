import React from "react";
import "./ContactUs.css";
import GetInTouch from "./GetInTouch";
import SocialMedia from "./SocialMedia";

const ContactUs = ()=>{
  return (
    <section className="containerOur">
      <div className="row">
        <div className="col-8 border-end"></div>
        <div className="col-4 border-start"><SocialMedia/></div>
      </div>
    </section>
  );
}
export default ContactUs;