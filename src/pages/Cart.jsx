import React, { useEffect, useState } from 'react'
import EmptyCart from '../components/EmptyCart';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';

function Cart() {

    const cartItems = useSelector((state) => state.cart.cart);
    const [isActive, setIsActive ] = useState(false)

    useEffect(() => {
        if(cartItems.length > 0) {
            setIsActive(true);
        }
    }, [cartItems]);

  return (
    <div className='container w-1/2 h-[80vh] mx-auto p-1 my-4 mt-10 border rounded-md'>
      <div className='flex flex-col justify-between items-center h-full'>
        {cartItems.length > 0 ? <CartItems items = {cartItems} /> : <EmptyCart />}
      <button className={`text-center w-1/2 mb-5 p-1 px-2 my-2 border rounded-full ${isActive ? "bg-sky-500 text-white" : "bg-gray-300 text-gray-500"}`}>Go to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
