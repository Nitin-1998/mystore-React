import React, { useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopupContact = ({ closeForm }) => {
  const notify = () => toast("Message Sent Successfully!");

  //Two Way binding
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setAddress("");
    emailjs
      .sendForm(
        "service_ytdtuae",
        "template_ovdpz85",
        form.current,
        "E0k88tpwXTpseDcB3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <main>
        <div className="w-full fixed inset-0 z-[9999] flex justify-center items-center backdrop-blur-[5px] bg-blend-multiply bg-black bg-opacity-[0.6]   ">
          <div className="dark:bg-gray-700 bg-white min-w-[300px] p-5 flex flex-col justify-center rounded-md  ">
            {/* text area */}
            <div className="flex items-center justify-between pb-4 dark:text-white ">
              <span>
                <h1 className="text-2xl font-semibold">Order Now</h1>
              </span>
              <span>
                <MdOutlineCancel
                  onClick={closeForm}
                  className=" active:text-red-600"
                  size={32}
                />
              </span>
            </div>

            {/* Form area */}
            <form ref={form} onSubmit={submitHandler}>
              <div className="flex flex-col justify-center gap-3">
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="w-full h-9 dark:bg-[#1F2937] dark:text-white capitalize px-4 rounded-2xl dark:outline-white border  focus:border-black  "
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full h-9 dark:bg-[#1F2937] dark:text-white  px-4 rounded-2xl dark:outline-white border  focus:border-black  "
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="w-full h-9 dark:bg-[#1F2937] dark:text-white px-4 rounded-2xl dark:outline-white border  focus:border-black  "
                    required
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                </div>
                <div className="text-center mx-auto ">
                  <button
                    onClick={notify}
                    type="submit"
                    className=" flex text-white justify-center items-center gap-2 rounded-2xl font-semibold py-2 px-6 hover:scale-105 transition duration-300  bg-[#F42C37]  "
                  >
                    Order Now
                  </button>
                </div>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default PopupContact;
