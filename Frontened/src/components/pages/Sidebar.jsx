import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
import { IoIosHome } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { BiSolidMoon } from "react-icons/bi";
import { PiSun } from "react-icons/pi";
import toast , {Toaster} from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

const [theme, settheme] = useState("light")
useEffect(() => {
  const saved = localStorage.getItem("selectedtheme") || "light"
  settheme(saved)
}, [])

useEffect(() => {
  document.body.classList.toggle("dark" , theme === "dark")
  localStorage.setItem("selectedtheme" , theme)
}, [theme])
const themechange = ()=>{
  const newtheme = theme === "light" ? "dark" : "light"
  settheme(newtheme)
}

const logoutfunction = ()=>{
  toast.success("Logout from Admin Panel successfull");
  setTimeout(() => {
    navigate("/")
  }, 1600);
}

  return (
   <>
    <div className="w-[90vw] h-[90vh] rounded-2xl bg-blue-50 dark:bg-slate-900 mx-auto  flex justify-between mt-5 border-2 dark:border-none border-gray-100 dark:text-white">
        <div className="w-[16vw] bg-white rounded-2xl dark:bg-gray-800">
          <Toaster />
          <div>
            <div className="flex justify-around my-5">
              <h2 className="cursor-pointer text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                devNotes
              </h2>
            </div>
            <div>
              <ul className="my-10" >
               <Link >
               
                <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded-2xl">
                  <div className="pr-2 text-2xl">
                    <IoIosHome />
                  </div>
                  <p className="text-xl">Dashboard</p>
                </li>
               </Link>
               <Link to="AdminUpload">
                <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded-2xl">
                  <div className="pr-2 text-2xl">
                    <LuUpload />
                  </div>
                  <p className="text-xl">Upload</p>
                </li>
               </Link>
                <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-2xl">
                  <div className="pr-2 text-2xl">
                  <LuMessageSquareText />
                  </div>
                  <p className="text-xl">Messages</p>
                </li>
               {
                theme === "light"
                ?
                <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded-2xl" onClick={themechange}>
                  <div className="pr-2 text-2xl">
               <BiSolidMoon />
                  </div>
                  <p className="text-xl">Dark Mode</p>
                </li>
                :
                <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded-2xl" onClick={themechange}>
                  <div className="pr-2 text-2xl">
               <PiSun />
                  </div>
                  <p className="text-xl">Light Mode</p>
                </li>
               }
              </ul>
            </div>
            <div>
           
              <div
              onClick={logoutfunction}
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-2xl">
                <span className="pr-2 text-2xl font-semibold">
                  <FaSignOutAlt />
                </span>
                <p  className="text-xl font-semibold">Log Out</p>
              </div>
         
            </div>
          </div>
        </div>
        </div>
   </>
  )
}

export default Sidebar
