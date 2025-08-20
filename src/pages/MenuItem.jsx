import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { foodCategories } from '../assets/utils/foodCategories';

function MenuItem() {

    const item = useSelector((state) => state.item.item);
    const { itemId } = useParams();
    const cat = foodCategories.filter((category) => parseInt(itemId[0]) === category.id)[0].name;
    
  return (
    <div className='container w-1/2 h-full mx-auto p-1 my-4 mt-10 border rounded-md'>
        <img className='w-full h-2/3 rounded-md' src={item.img} alt={item.name} />
        <div className='p-2 flex flex-col items-center'>
            <p className='font-bold text-xl my-1'>{item.name}</p>
        <p className='italic my-1'>{item.description}</p>
        <p className='font-bold text-lg my-1'>₹{item.price}</p>
        <p className='italic my-1'>Category: {cat}</p>
        <button className="p-1 px-2 my-2 bg-sky-500 border rounded-full text-white hover:bg-sky-600">Add to Cart</button>
        </div>
    </div>
  )
}

export default MenuItem
