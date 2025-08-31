import React from "react";
import { BsBasketFill } from "react-icons/bs";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <BsBasketFill className="w-full h-10 text-gray-500" />
      <p className="text-center w-full text-gray-400">Your basket is empty</p>
    </div>
  );
}

export default EmptyCart;
