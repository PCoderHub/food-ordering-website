import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";

function Header() {

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/user-auth")
  }

  return (
    <header>
      <div className="flex justify-between max-w-[1400px] mx-auto px-2">
        <Link to="/" className="flex">
          <img className="w-10 h-10 mt-2" src="https://cdn-icons-png.flaticon.com/512/857/857681.png" alt="Logo" />
          <h1 className="m-1 font-bold text-4xl text-sky-600">hungerly</h1>
        </Link>
        <div className="flex mt-4">
          <Link to="/admin" className="flex bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 mr-1 hover:scale-105 hover:text-sky-400">
            <RiAdminLine className="mt-1 mr-1" />
            Admin
          </Link>
          <Link to="/orders" className="flex bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 mr-1 hover:scale-105 hover:text-sky-400">
            <IoFastFood className="mt-1 mr-1" />
            My Orders
          </Link>
          <Link to="/cart" className="flex bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 mr-1 hover:scale-105 hover:text-sky-400">
            <BsCart3 className="mt-1 mr-1" />
            Cart{` (${quantity})`}
          </Link>
          {localStorage.getItem("email") ? <button onClick={handleLogout} className="flex bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 ml-1 hover:scale-105 hover:text-sky-400"><CiLogout className="mt-1 mr-1" />Logout</button> : <Link to="/user-auth" className="flex bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 ml-1 hover:scale-105 hover:text-sky-400">
            <MdAccountCircle className="mt-1 mr-1" />
            Sign Up/Log In
          </Link>}
        </div>
      </div>
    </header>
  );
}

export default Header;
