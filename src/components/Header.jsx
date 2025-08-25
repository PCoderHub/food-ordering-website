import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

function Header() {

  const cartItems = useSelector((state) => state.cart.cart);
  const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <div className="flex justify-between max-w-[1400px] mx-auto px-2">
        <Link to="/" className="flex">
          <img className="w-10 h-10 mt-2" src={logo} alt="Logo" />
          <h1 className="m-1 font-bold text-4xl text-[#0941ec]">Hungerly</h1>
        </Link>
        <div className="flex mt-4">
          <Link to="/cart" className="flex bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 mr-1 hover:scale-105 hover:text-sky-400">
            <BsCart3 className="mt-1 mr-1" />
            Cart{` (${quantity})`}
          </Link>
          <Link className="flex bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 ml-1 hover:scale-105 hover:text-sky-400">
            <MdAccountCircle className="mt-1 mr-1" />
            Sign Up/Log In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
