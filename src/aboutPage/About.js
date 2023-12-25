import React from "react";
import BackAboutSec from "./BackAboutUsSEction/BackAboutSec";
import MainSection from "./BlogAboutUs/MainSection";
import FoodFeaturesSection from "./FoodFeatures/FoodFeaturesSection";
import OurTeam from "./Team/OurTeam";
import HistorySection from "./History/HistorySection";
import ReviewsSection from "./Reviews/ReviewsSection";


const About = () =>{
  return (
    <>
      <BackAboutSec />
      <MainSection />
      <FoodFeaturesSection/>
      <OurTeam/>
      <HistorySection/>
      <ReviewsSection />
    </>
  );
}
export default About;