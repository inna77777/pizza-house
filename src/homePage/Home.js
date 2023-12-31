import React from "react";
import SliderShow from "./SliderShow";
import OurMenu from "./OurMenu";
import PizzaHouseService from "./PizzaHouseService";
import PizzaVariations from "./PizzaVariations";
import DiscountSaladSection from "./DiscountSaladSection";
import TestimonialsSection from "./TestimonialsSection";
import GridImagesSection from "./GridImagesSection";
import BookTable from "./BookTable";
import WhatWeOffer from "./WhatWeOffer";



const Home = () =>{
return (
  <>
    <SliderShow />
    <OurMenu />
    <PizzaHouseService />
    <PizzaVariations />
    <DiscountSaladSection />
    <TestimonialsSection />
    <GridImagesSection />
    <BookTable />
    <WhatWeOffer />
  </>
);
}
export  default Home;