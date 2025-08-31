import React, { useEffect } from 'react'
import { RiMenu5Line } from "react-icons/ri";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import Aos from 'aos';
import Logout from './Logout';
import toast, { Toaster } from 'react-hot-toast';
import Mobilenav from './Mobilenav';
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

function Header() {

  const selector = useSelector(state => state)
  const authuser = selector.auth.user;

  const [scroll, setscroll] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setscroll(true);
      } else {
        setscroll(false)
      }
      window.addEventListener("scroll", handlescroll())
      return () => {
        window.removeEventListener("scroll", handlescroll())
      }
    }
  }, [])
  useEffect(() => {
    Aos.init({});
  }, [])

  const [isOpen, setisOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Set theme on first load
  useEffect(() => {
    const saved = localStorage.getItem('selectedtheme') || "light";
    setTheme(saved);

  }, []);

  // Apply dark class when theme changes
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");

    localStorage.setItem('selectedtheme', theme);
  }, [theme]);

  const handlechange = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  };



  const mode = localStorage.getItem("selectedtheme")
  console.log(mode)
  return <>
    <div className='relative '>
      <div data-aos="fade-out" data-aos-duration="1500" className={`navbar flex justify-around gap-10 sm:flex sm:justify-around items-center sm:max-w-[2000px] sm:mx-auto my-2 p-4 fixed bg-white top-0 left-0 right-0 mt-0 dark:bg-gray-800 ${scroll ? "bg-base-200 duration-300 transition-all ease-in-out" : ""
        } `}>
        <Toaster />
        <div className=' flex items-center gap-2'>
          <div className='sm:hidden menu cursor-pointer' onClick={() => { setisOpen(!isOpen); console.log("this nutton is clicked") }}>
            <RiMenu5Line />

          </div>
          <span className="cursor-pointer text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            <Link to="/">devNotes</Link>
          </span>
        </div>
        <div className='flex justify-around gap-5 items-center'>
          <ul className='sm:flex justify-around gap-5 hidden'>
            <li className='hover:bg-slate-200 cursor-pointer rounded-md p-2 dark:text-white dark:hover:bg-gray-600'>  <Link to="/"> Home</Link></li>
            <li className='hover:bg-slate-200 cursor-pointer rounded-md p-2 dark:text-white dark:hover:bg-gray-600'>  <Link to="/Notes"> Notes</Link></li>

            <Link to="/SupportPage"><li className='hover:bg-slate-200 cursor-pointer rounded-md p-2 dark:text-white dark:hover:bg-gray-600'>Support</li></Link>
            {
              theme === "light" ? <li className='hover:bg-slate-200 cursor-pointer rounded-md p-2 mt-1 transition-all dark:text-white dark:hover:bg-gray-600'
                onClick={handlechange}>
                  <FaMoon />
              </li> :
                <li className='hover:bg-slate-200 cursor-pointer rounded-md p-2 mt-1 transition-all dark:text-white dark:hover:bg-gray-600'
                  onClick={handlechange}>
                 <GoSun />  
                </li>
            }
          </ul>
          <div className='absolute  mt-70 bg-gray-200 dark:bg-blue-950 mr-103 rounded-xl w-[40vw] '>
            {
              isOpen ? <div><Mobilenav /></div> : <div className='hidden'><Mobilenav /></div>
            }
          </div>
          {
            authuser ? <div
            // onClick={handlemessage}
            ><Logout /></div> :

              <Link to="/Login">
                <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 cursor-pointer dark:text-white">
                  Log In
                </button>
              </Link>
          }

        </div>

      </div>
    </div>

  </>
}

export default Header


