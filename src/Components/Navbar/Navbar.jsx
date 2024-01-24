import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";

import DarkMode from "./DarkMode";
import PopupContact from "../PopupContact";

const dropLinks = [
  {
    id: 1,
    name: "Our Services",
    Link: "/#Services",
  },
  {
    id: 2,
    name: "Our Brands",
    Link: "/#Brands",
  },
  {
    id: 3,
    name: "Our Legecy",
    Link: "/#Legecy",
  },
];

const Navbar = () => {
 
  const [showPopup, setShowPopup] = useState(false)

  useEffect(()=>{

  },[])

  const popHandler = ()=>{
    setShowPopup(true)
  }

 const closeFrom = ()=>{
  setShowPopup(false)
 }

  return (
    <>
      <main className="dark:bg-slate-900 transition-all shadow-md">
        <div>
          <div className="flex justify-between items-center container  ">
            {/* left Column */}
            <div className="flex items-center justify-center gap-10  py-6">
              {/* logo */}
              <div>
                <Link to="/">
                  <h1 className="text-red-600 text-3xl font-medium">MySHOP</h1>
                </Link>
              </div>

              <div className="md:flex dark:text-gray-500 gap-7 justify-center items-center text-[17px] font-semibold hidden font-sans  ">
                <Link to="/">Home</Link>
                <Link to="/#shop">Shop</Link>
                <Link to="/#about">About</Link>
                <Link to="/blogs">Blogs</Link>
                {/* Dropdown Section */}
                <div>
                  <div className="flex items-center group relative ">
                    <span>Quick Links</span>
                    <span>
                      <RiArrowDropDownFill
                        className=" group-hover:rotate-180 transition duration-200"
                        size={30}
                      />
                    </span>

                    {/* DropdownLinks */}
                    <ul className="hidden w-[200px] group-hover:block absolute top-7  rounded-lg bg-white shadow-md dark:bg-slate-800  p-1 z-[99999] ">
                      {dropLinks.map((data) => {
                        return (
                          <li
                            className="w-full inline-block py-2 px-4 text-base hover:rounded-lg hover:bg-red-900 hover:text-white "
                            key={data.id}
                          >
                            <a className="w-full " href={data.Link}>
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex justify-between gap-4 items-center">
              <div className=" hidden sm:flex relative items-center   group mr-4   ">
                {/* Search Bar */}
                <input
                  className="search-bar dark:bg-slate-900   "
                  type="text"
                  placeholder="Search"
                />
                <CiSearch className=" absolute pr-2 right-0 dark:text-white font-bold text-red-700 " size={32} />
                
                </div>
                <div className="flex dark:text-white  gap-4">
                  {/* shopping Cart */}
                <MdAddShoppingCart onClick={popHandler} size={28} />
                {/* Dark/Light Button */}
                <div>
                <DarkMode />
                  
                </div>

                {
                  showPopup && <PopupContact closeForm={closeFrom}  />
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
