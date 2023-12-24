import React from "react";
import CompanyProfile from "./CompanyProfile";
import MainContent from "./MainContent";
import "./MainSection.css";


const MainSection =()=> {
  return (
    <div className="containerOur">
      <div className="row text-start">
        <div className="col-8 content-about">
          <MainContent />
        </div>
        <div className="col-4 links-to-content">
          <CompanyProfile />
        </div>
      </div>
    </div>
  );
}
export default MainSection;