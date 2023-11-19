import React from "react";
import SliderShow from "./SliderShow";
import OurMenu from "./OurMenu";
import PizzaHouseService from "./PizzaHouseService";
import PizzaVariations from "./PizzaVariations";
import DiscountSaladSection from "./DiscountSaladSection";
import TestimonialsSection from "./TestimonialsSection";



const Home = () =>{
return (<>
<SliderShow/>
<OurMenu />
<PizzaHouseService />
<PizzaVariations />
<DiscountSaladSection />
<TestimonialsSection />
</>);
}
export  default Home;