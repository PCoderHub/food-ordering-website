import React from 'react'
import { IoTrash } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function CartItem({item}) {
  return (
    <div className="flex justify-between items-center w-[90%] h-[30%] p-1 border rounded-md border-solid border-black m-1">
        <img className='w-1/3 h-full object-cover' src={item.img} alt="" />
        <p>{item.quantity}x</p>
        <p className='text-lg'>{item.name}</p>
        <p>₹{item.price}</p>
        <div className='my-auto'>
            <button><FaMinus className='text-lg mx-2 active:text-sky-500' /></button>
            <button><FaPlus className='text-lg mx-2 active:text-sky-500' /></button>
            <button><IoTrash className='text-red-500 text-lg mx-2 active:text-red-700' /></button>
        </div>
    </div>
  )
}

export default CartItem
