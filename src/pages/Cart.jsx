import React from 'react'
import EmptyCart from '../components/EmptyCart';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import { useNavigate } from 'react-router-dom';

function Cart() {

    const cartItems = useSelector((state) => state.cart.cart);
    const total = cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0)
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/checkout")
    }

  return (
    <div className='container w-1/2 h-[80vh] mx-auto p-1 my-4 mt-10 border rounded-md'>
      <div className='flex flex-col justify-between items-center h-full'>
        {cartItems.length > 0 ? <><CartItems items = {cartItems} /><p className='w-full px-5 py-2 text-lg font-bold flex justify-between mt-2'><span>Order total</span> <span>₹{total}</span></p></> : <EmptyCart />}
      <button onClick={handleClick} className={`text-center w-1/2 mb-5 p-1 px-2 my-2 border rounded-full ${cartItems.length > 0 ? "bg-sky-500 text-white" : "bg-gray-300 text-gray-500"}`} disabled={!(cartItems.length > 0)}>Go to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
