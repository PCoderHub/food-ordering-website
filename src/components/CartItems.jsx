import React from 'react'
import CartItem from './CartItem'
import { IoTrash } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { emptyCartItems } from '../features/cart/cartSlice';

function CartItems({items}) {

  const dispatch = useDispatch();
  const removeAllItems = () => {
    dispatch(emptyCartItems());
  }

  return (
    <div className='w-full overflow-y-auto flex flex-col items-center'>
      <div className='w-full flex justify-between px-5'>
        <h3 className="font-bold text-3xl text-gray-700 my-3">Your Order</h3>
        <button onClick={removeAllItems}><IoTrash className='text-gray-500 text-3xl mx-2 active:text-red-700' /></button>
      </div>
      {items.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  )
}

export default CartItems
