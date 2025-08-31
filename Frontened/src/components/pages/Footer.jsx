import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return <>
        <div className='text-center mt-10'>
            {/* <div className='h-0.5 bg-slate-600 '></div> */}
            <div>
                <div className='p-4'>
                    @devNotes
                </div>
            </div>
            <div className='flex justify-around items-center p-3'>
                &copy; 2025.devNotes.All rights reserved.

            </div>
            <div className='flex justify-around items-center gap-5'>
                <div className='w-[220px] flex justify-around p-4 gap-2'>
                    <FaFacebook />
                    <FaTwitter />
                    <IoLogoInstagram />
                    <FaGithub />
                </div>
            </div>
        </div>
    </>
}

export default Footer
