import React, { useEffect, useState } from "react";
import headphone from "../../assets/Products/headphone.png";
import laptop from "../../assets/Products/laptop.png";
import vrbox from "../../assets/Products/vrbox.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopupContact from "../PopupContact";

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplayspeed: 4000,
    cssCase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //for Popup Form

  const [showPopup, setShowPopup] = useState(false);

  const popupHandler = () => {
    setShowPopup(true);
    console.log("hello");
  };

  //For popup after 5 second when we open the page
  useEffect(() => {
    setTimeout(()=>{
        setShowPopup(true)
    },5000)
  },[])
  

  const closeForm = () => {
    setShowPopup(false);
  };

  return (
    <main className=" dark:bg-slate-900  ">
      <div className="container ">
        <div>
          <Slider {...settings}>
            <div className="  bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800 = w-full container bg-slate-600 rounded-xl  ">
              <div className="  grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-center py-16 h-screen   ">
                {/* Heading */}
                <div
                  data-aos="zoom-out"
                  className="order-last text-center sm:text-start sm:order-first"
                >
                  <h1 className="text-white text-3xl sm:text-7xl font-semibold md:text-4xl ">
                    Beats Solo <br />
                    <span className="text-6xl sm:text-7xl">Wireless</span>
                  </h1>
                  <h1 className="text-gray-800 text-4xl  sm:text-7xl lg:text-9xl font-semibold absolute z-[1]  ">
                    HEADPHONE
                  </h1>
                  <button
                    onClick={popupHandler}
                    data-aos="fade-in"
                    className="bg-red-500 text-white py-2 px-6 rounded-xl mt-16 sm:mt-24 lg:mt-36"
                  >
                    Shop By Category{" "}
                  </button>
                </div>

                <div data-aos="zoom-in" className="  z-[2]">
                  <img src={headphone} />
                </div>
              </div>
            </div>
           
            {/* Image */}

            <div className=" bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800  w-full container bg-slate-600 rounded-xl  ">
              <div className="  grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-center py-16 h-screen">
                {/* Heading */}
                <div className="order-last text-center sm:text-start sm:order-first">
                  <h1 className="text-white text-3xl sm:text-7xl font-semibold md:text-4xl ">
                    Apple <br />
                    <span className="text-7xl">VR Box</span>
                  </h1>
                  <h1 className="text-gray-800 text-4xl  sm:text-7xl lg:text-9xl font-semibold absolute z-[1]  ">
                    VRBOXOFFER
                  </h1>
                  <button
                    onClick={popupHandler}
                    data-aos="fade-up"
                    className="bg-red-500 text-white py-2 px-6 rounded-xl mt-16 sm:mt-24 lg:mt-36"
                  >
                    Shop By Category{" "}
                  </button>
                </div>
                {}
                {/* Image */}
                <div data-aos="zoom-in" className="  z-[2]">
                  <img src={vrbox} />
                </div>
              </div>
            </div>

            <div className=" bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800  w-full container bg-slate-600 rounded-xl  ">
              <div className="  grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-center py-16 h-screen ">
                {/* Heading */}
                <div className="order-last text-center sm:text-start sm:order-first">
                  <h1 className="text-white text-3xl sm:text-7xl font-semibold md:text-4xl ">
                    Tranding Laptops <br />
                    <span className="text-7xl"></span>
                  </h1>
                  <h1 className="text-gray-800 text-4xl  sm:text-7xl lg:text-9xl font-semibold absolute z-[1]  ">
                    NEWLAPTOPS
                  </h1>
                  <button
                  onClick={popupHandler}
                    data-aos="fade-up"
                    className="bg-red-500 text-white py-2 px-6 rounded-xl mt-16 sm:mt-24 lg:mt-36"
                  >
                    Shop By Category{" "}
                  </button>
                </div>
                {/* Image */}
                <div data-aos="zoom-in" className="z-[2]">
                  <img src={laptop} />
                </div>
              </div>
            </div>
          </Slider>
        </div>
         {/* popup form */}
         {showPopup && <PopupContact closeForm={closeForm} />}
      </div>
    </main>
  );
};

export default Hero;
