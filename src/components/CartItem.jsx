import React from "react";
import { IoTrash } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const decrementItemQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(removeItem(item));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[90%] h-full sm:h-[30%] p-1 border rounded-md border-solid border-gray-300 dark:border-gray-600 m-1">
      <img
        className="w-full sm:w-1/3 h-32 sm:h-full object-cover"
        src={item.img}
        alt={item.name}
      />
      <p>{item.quantity}x</p>
      <p className="text-lg">{item.name}</p>
      <p>₹{item.price}</p>
      <div className="my-auto">
        <button onClick={decrementItemQuantity}>
          <FaMinus className="text-lg mx-2 active:text-sky-500" />
        </button>
        <button onClick={() => dispatch(incrementQuantity(item))}>
          <FaPlus className="text-lg mx-2 active:text-sky-500" />
        </button>
        <button onClick={() => dispatch(removeItem(item))}>
          <IoTrash className="text-red-500 text-lg mx-2 active:text-red-700" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
