import React from "react";
import BrowsButton from "../Buttons/BrowsButton";

const BigCards = ({title1,title2,mainTitle,src,bgColor,buttColor,textColor}) => {
  return (
    <>
      <main>
        <div className={`${bgColor} h-[300px] sm:w-[550px] rounded-2xl`}>
          <div className="grid grid-cols-2 place-content-center place-items-center py-20 sm:py-10 p-10">
            {/* Content */}
            <div>
              <h1 className="text-gray-200 ">{title1}</h1>
              <h1 className="text-xl text-white font-semibold">{title2}</h1>
              <h1 className="text-4xl xl:text-5xl font-bold opacity-40  ">
                {mainTitle}
              </h1>
              <BrowsButton btnBgColor="bg-[#fff]" btnTxtColor="text-[#F42C37]" title="Browse" />
              
            </div>
            {/* Image */}
            <div>
              <img src={src} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BigCards;
