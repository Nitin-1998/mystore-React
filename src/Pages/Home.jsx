import React from "react";

import Hero from "../Components/Hero/Hero.jsx";
import CardsArea from "../Components/Hero/CardsArea.jsx";
import Services from "../Components/Services/Services.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import Products from "../Components/Products/Products.jsx";
import Headphone from "../assets/Products/headphone.png";
import watch from '../assets/Products/apple-watch.png'
import BlogComp from "../Components/BlogComponent/BlogComp.jsx";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <CardsArea />
        <Services />
        <Banner src={Headphone} bgColor="bg-[#F42C37]" title1="Happy Hours" title2="Winter Sale" />
        <Products />
        <Banner src={watch} bgColor="bg-[#2DCC6F]" title1="Get fit" title2="Great Sale" />
        <BlogComp />
      </main>
    </>
  );
};

export default Home;
