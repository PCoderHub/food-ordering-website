import React from 'react'
import logo from "../assets/images/logo.svg"
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className='h-[500px] bg-[url(https://c8.alamy.com/comp/P3WFK6/food-cooking-ingredient-food-background-on-white-wooden-table-top-view-long-banner-format-P3WFK6.jpg)] bg-cover'>
        <div className='flex justify-between max-w-[1400px] mx-auto'>
            <div className='flex'>
                <img className='w-10 h-10 mt-2' src={logo} alt="Logo" />
                <h1 className='m-1 font-bold text-4xl text-[#0941ec]'>Hungerly</h1>
            </div>
            <div className='mt-4'>
                <button className='bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 mr-1 hover:scale-105'>Menu</button>
                <button className='bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 ml-1 hover:scale-105'>Sign Up/Log In</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center bg-white rounded-xl mx-auto w-1/2 h-48 mt-30 shadow-xl'>
            <div>
                <label htmlFor="search" className='ml-2'>Search your favorite dish:</label><br />
                <div className='relative flex w-full'>
                    <FaSearch className='absolute left-4 top-6 text-lg text-sky-500'/>
                    <input type="text" placeholder='Search...' maxLength={43} name='search' id='search' className='w-96 border rounded-full p-3 px-10 mt-2' />
                    <button className='bg-sky-500 hover:bg-sky-600 rounded-full absolute right-1 top-3 px-4 py-2 text-white font-bold'>Search</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
