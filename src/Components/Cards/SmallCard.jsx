import React from "react";
import BrowsButton from "../Buttons/BrowsButton";


const SmallCard = ({ title1, title2, mainTitle, src, bgColor,position,top }) => {
  return (
    <>
      <main>
        <div className={`${bgColor} h-[300px] w-[320px] sm:w-[250px] rounded-2xl  `}>
          <div className="grid grid-cols-2 place-content-center place-items-center pt-24 relative">
            {/* Content */}
            <div className="z-[1] pt-10">
              <h1 className="text-gray-200 ">{title1}</h1>
              <h1 className="text-xl text-white font-semibold">{title2}</h1>
              <h1 className="text-3xl font-bold opacity-40 text-white  ">
                {mainTitle}
              </h1>
              <BrowsButton btnBgColor="bg-[#F42C37]" btnTxtColor="text-white" title="Browse" />

              
            </div>
            {/* Image */}
            <div className={`${position} ${top}`}>
              <img src={src} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SmallCard;
