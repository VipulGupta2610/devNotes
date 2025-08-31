import React, { useEffect } from "react";
import phone from "../../assets/phone.jpg";
import { LuNotebookPen } from "react-icons/lu";
import { SlLock } from "react-icons/sl";
import { IoDownloadOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import darkphone from "../../assets/darkphone.jpg";

function Home() {

  const notificationbanner = () => {
    const [visible, setvisible] = useState(true);

    if (visible)
      return (
        <div className="relative bg-white border-2 border-gray-300 rounded-b-md shadow p-5 flex items-center justify-between dark:bg-slate-300">
          <div className="absolute -top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-800 dark:border-b-white"></div>
          <span className="text-gray-700 font-bold">
            Click here to view free notes
          </span>
          <button
            onClick={() => {
              setvisible(false);
            }}
            className="absolute -top-1 right-1 pl-5 cursor-pointer dark:text-black font-semibold"
          >
            ✕
          </button>
        </div>
      );
    else {
      return null;
    }
  };
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1500 "
        className="dark:bg-slate-900"
      >
        <div className="sm:mt-20 mt-15 flex flex-wrap justify-around sm:w-[90vw] sm:mx-auto w-[85vw] mx-auto dark:bg-slate-900">
          <div className="order-2 sm:order-1">
            <div className="text-2xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-400 mt-20 hidden sm:flex">
              devNotes
            </div>
            <div className="text-3xl mt-8 font-semibold">
              A secure, fast and beautiful
            </div>
            <div className="text-3xl mt-1 font-semibold text-indigo-400">
              note-taking website.
            </div>
            <div className="sm:flex grid sm:justify-around sm:mt-10 sm:gap-4 mt-4 gap-1">
              <Link to="/Notes">
                <button className="bg-indigo-600 text-white px-6 py-4 rounded-md hover:bg-indigo-700 cursor-pointer text-2xl mt-7 ">
                  Get Notes - It's Free
                </button>
              </Link>
              <Link to="/Features">
                <button className="border-2  border-indigo-600  text-indigo-600 font-semibold px-6 py-3 rounded-md  cursor-pointer text-2xl sm:mt-7 hover:opacity-70 mt-4">
                  View Features
                </button>
              </Link>
            </div>
            <div className="mt-1 p-1 sm:w-[500px] h-[50px] sm:flex hidden">
              {" "}
              {notificationbanner()}
            </div>
          </div>


          <div className="order-1 flex  dark:hidden">
            <img className="h-[50vh] sm:h-[62vh]" src={phone} alt="" />
          </div>

          <div className="order-1 dark:flex hidden">
            <img className="h-[50vh] sm:h-[62vh]" src={darkphone} alt="" />
          </div>

        </div>
        <div className="sm:flex sm:justify-around sm:w-[70vw] w-[85vw] mx-auto sm:mx-auto my-10 sm:mt-0">
          <div className="flex items-center gap-2 text-2xl">
            <LuNotebookPen />
            <p> Take Notes Instantly</p>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <SlLock />
            <p> End-to-End Encrypted</p>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <IoDownloadOutline />
            <p> Download to your Device</p>
          </div>
        </div>
        <div className="bg-slate-200 sm:flex sm:justify-around items-center mt-9 sm:w-[80vw] sm:mx-auto w-[85vw] mx-auto p-5 rounded-2xl shadow-2xl shadow-gray-400 dark:shadow-xl dark:shadow-gray-600 dark:text-black dark:bg-slate-300">
          <p className="sm:text-2xl text-2xl">
            Ready to try devNotes? It's free and always will be.
          </p>
          <div>
            <Link to="/Signup">
              <button className="bg-indigo-600 text-white px-6 py-4 my-[20px] sm:my-0 rounded-md hover:bg-indigo-700 cursor-pointer text-2xl">
                Create Free Account
              </button>
            </Link>
            <p className="font-semibold pt-1 text-xs sm:text-sm dark:text-black">
              No credit card required. Start saving notes Instantly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
