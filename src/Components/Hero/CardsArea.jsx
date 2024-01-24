import React from "react";
import SmallCard from "../Cards/SmallCard";
import earphone from "../../assets/Products/earphone.png";
import watch from "../../assets/Products/watch.png";
import BigCards from "../Cards/BigCards";
import Laptop from "../../assets/Products/laptop.png";
import ps5 from "../../assets/Products/ps5.png";
import vrBox from "../../assets/Products/vrbox.png";
import speaker from "../../assets/Products/speaker.png";

const CardsArea = () => {
  return (
    <>
      <main className=" w-full py-10 dark:bg-slate-900">
        <div className="container flex justify-center flex-wrap items-center gap-10">
          <SmallCard
            bgColor="dark:bg-[#000] bg-[#222222] "
            title1="Enjoy"
            title2="with"
            mainTitle="Gadgets"
            position="absolute"
            top="sm:top-9 -top-10  "
            src={earphone}
          />

          <SmallCard
            bgColor="bg-[#F2BE2E]"
            title1="Enjoy"
            title2="with"
            mainTitle="Watch"
            position="absolute"
            top="left-2"
            src={watch}
          />

          <BigCards
            bgColor="bg-[#E62B36]"
            buttColor="bg-white"
            title1="Enjoy"
            title2="With"
            mainTitle="Laptop"
            src={Laptop}
          />
          

          <BigCards
            bgColor="bg-[#C1C5CC]"
            buttColor="bg-white"
            title1="Enjoy"
            title2="With"
            mainTitle="Play Station"
            src={ps5}
          />

          <SmallCard
            bgColor="bg-[#2BBB68]"
            title1="Enjoy"
            title2="with"
            mainTitle="VR Box"
            src={vrBox}
            position="absolute"
            top="top-7 md:top-20"
          />

          <SmallCard
            bgColor="bg-[#1372EA]"
            title1="Enjoy"
            title2="with"
            mainTitle="Speaker"
            src={speaker}
            position="absolute"
            top="top-8"
          />
        </div>
      </main>
    </>
  );
};

export default CardsArea;
