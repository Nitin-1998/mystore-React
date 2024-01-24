import React from "react";
import { RiPoliceCarLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <main className="dark:bg-slate-900 dark:text-white text-black py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 place-content-center place-items-center gap-3 md:gap-10 ">
            {/* card1 */}
            <div className=" flex justify-center items-center gap-4">
              <div>
                <RiPoliceCarLine className="text-[#F42C37] text-4xl " />
              </div>
              <div>
                <h1 className="text-sm font-semibold sm:text-xl">
                  Free Shipping
                </h1>
                <p className="text-gray-600 text-xs sm:text-base ">
                  Free Shipping On All Order
                </p>
              </div>
            </div>

            {/* card2 */}
            <div className="flex items-center gap-4">
              <div>
                <RiMoneyDollarCircleLine className="text-[#F42C37] text-4xl" />
              </div>
              <div>
                <h1 className=" text-sm font-semibold sm:text-xl">
                  Safe Money
                </h1>
                <p className="text-gray-600 text-xs sm:text-base ">
                  Free 30 Days Money Back
                </p>
              </div>
            </div>

            {/* card3 */}
            <div className="flex  items-center gap-4 ">
              <div>
                <RiSecurePaymentFill className="text-[#F42C37] text-4xl " />
              </div>
              <div>
                <h1 className=" text-sm font-semibold sm:text-xl">
                  Secure Payment
                </h1>
                <p className="text-gray-600 text-xs sm:text-base ">
                  Free All Payment Secure
                </p>
              </div>
            </div>

            {/* card4 */}
            <div className="flex items-center gap-4">
              <div>
                <BiSupport className="text-[#F42C37] text-4xl" />
              </div>
              <div>
                <h1 className=" text-sm font-semibold sm:text-xl">
                  Online Supoort
                </h1>
                <p className="text-gray-600 text-xs sm:text-base ">
                  Free Technical Support 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
