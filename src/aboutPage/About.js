import React from "react";
import BackAboutSec from "./BackAboutUsSEction/BackAboutSec";
import MainSection from "./BlogAboutUs/MainSection";
import FoodFeaturesSection from "./FoodFeatures/FoodFeaturesSection";
import OurTeam from "./Team/OurTeam";


const About = () =>{
  return (
    <>
      <BackAboutSec />
      <MainSection />
      <FoodFeaturesSection/>
      <OurTeam/>
    </>
  );
}
export default About;