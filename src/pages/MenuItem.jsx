import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { foodCategories } from '../assets/utils/foodCategories';
import { incrementQuantity, saveCartItem } from '../features/cart/cartSlice';

function MenuItem() {

    const item = useSelector((state) => state.item.item);
    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const cat = foodCategories.filter((category) => parseInt(itemId[0]) === category.id)[0].name;

    const addToCart = () => {

      const itemExists = cartItems.some((it) => it.id === item.id);

      if(itemExists) {
        dispatch(incrementQuantity(item))
      } else {

        const cartItem = {
        ...item,
        quantity: 1,
      }

      dispatch(saveCartItem(cartItem));

      }
    }
    
  return (
    <div className='container w-1/2 h-[80vh] mx-auto p-1 my-4 mt-10 border rounded-md'>
        <img className='w-full h-2/3 object-cover rounded-md' src={item.img} alt={item.name} />
        <div className='p-2 flex flex-col items-center'>
            <p className='font-bold text-xl my-1'>{item.name}</p>
        <p className='italic my-1'>{item.description}</p>
        <p className='font-bold text-lg my-1'>₹{item.price}</p>
        <p className='italic my-1'>Category: {cat}</p>
        <button className="p-1 px-2 my-2 bg-sky-500 border rounded-full text-white hover:bg-sky-600" onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default MenuItem
