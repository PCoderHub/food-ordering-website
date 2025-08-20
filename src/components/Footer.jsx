import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-gray-500 mt-20'>
        <div className='flex flex-col'>
            <button className='m-1 text-white hover:underline hover:text-sky-500'>About Us</button>
            <button className='m-1 text-white hover:underline hover:text-sky-500'>Contact Us</button>
        </div>
        <div className='flex justify-between'>
            <div className='flex justify-evenly m-2 text-white p-2'>
                <FaFacebook className='mx-1' />
                <FaTwitter className='mx-1' />
                <FaInstagram className='mx-1' />
            </div>
            <p className='text-white m-2'>&copy;2025 Hungerly</p>
        </div>
    </div>
  )
}

export default Footer
