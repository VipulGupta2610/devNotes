import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react';
import { GoSun } from "react-icons/go";

function Mobilenav() {

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

  return (
    <div>
         <div className='sm:hidden rounded-2xl'>
                <p className='hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer rounded-md p-3'> <Link to="/"> Home</Link></p>
                <p className='hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer rounded-md p-3'> <Link to="/Notes"> Notes</Link></p>
                <p className='hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer rounded-md p-3'> <Link to="/SupportPage"> Support</Link></p>
    {
      theme === "light" 
      ?
      <p className='hover:bg-gray-100 cursor-pointer rounded-md p-3 dark:hover:bg-gray-500' onClick={handlechange}>Dark Mode</p>
      :
      <p className='hover:bg-gray-100 cursor-pointer rounded-md p-3 dark:hover:bg-gray-500' onClick={handlechange}>Light Mode</p>
    }
              </div>
    </div>
  )
}

export default Mobilenav
