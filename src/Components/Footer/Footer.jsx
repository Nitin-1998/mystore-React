import React from "react";
import BrowsButton from "../Buttons/BrowsButton";
import { Link } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <main className=" bg-slate-600 dark:bg-[#030712] dark:text-white pt-10">
        <div className="container pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-9 ">
            {/* Logo Section */}
            <div className="flex flex-col justify-start items-start gap-1 ">
              <h1 className="text-red-600 text-3xl font-medium pb-2">
                My Shop
              </h1>
              <p className="text-gray-300 pb-1">
                This page is build using ReactJS & Tailwind CSS
              </p>
              <p className="text-white">Made With 💖 by Nitin Kumar </p>
              <BrowsButton
                title="Contact Me"
                btnBgColor="bg-[#F42C37]"
                bgColor="bg-[#fff]"
              />
            </div>

            {/* Links Section  */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-4">
                {/* Area1 */}
                <div>
                  <h1 className="text-xl font-semibold py-4">
                    Important Links
                  </h1>
                  <div className="flex flex-col justify-start items-start gap-3 text-gray-400">
                    <Link to="/" onClick={() => scrollTo(0, 0)}>
                      Home
                    </Link>
                    <Link to="/about">About</Link>
                    <Link to="/" onClick={() => scrollTo(0, 0)}>
                      Contact
                    </Link>
                    <Link to="/blogs">Blog</Link>
                  </div>
                </div>

                {/* Area2 */}
                <div>
                  <h1 className="text-xl font-semibold py-4">Quick Links</h1>
                  <div className="flex flex-col justify-start items-start gap-3 text-gray-400">
                    <Link to="/" onClick={() => scrollTo(0, 0)}>
                      Home
                    </Link>
                    <Link to="/about">About</Link>
                    <Link to="/" onClick={() => scrollTo(0, 0)}>
                      Contact
                    </Link>
                    <Link to="/blogs">Blog</Link>
                  </div>
                </div>

                {/* Area3 */}
                <div>
                  <h1 className="text-xl font-semibold py-4">Address</h1>

                  <div>
                    <span className="flex items-center gap-2 pb-3">
                      <FaAddressBook size={22} />
                      <p>New Delhi, Delhi</p>
                    </span>

                    <span className="flex items-center gap-2">
                      <CiMobile3 size={22} />
                      <p>+91123 123 1234</p>
                    </span>
                    <span className=" flex pt-4 items-center gap-2 text-white ">
                      <FaInstagram size={46} />
                      <FaFacebookSquare size={46} />
                      <FaLinkedin size={46} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        {/* CopyRight */}
        <div className="w-full bg-slate-900 ">
              <p className="text-center text-white py-1">All Rights Reserve @ Nitin Kumar 2024</p>
          </div>
      </main>
    </>
  );
};

export default Footer;
