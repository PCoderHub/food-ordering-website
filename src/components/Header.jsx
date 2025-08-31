import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/user-auth");
  };

  return (
    <header className="bg-transparent dark:bg-gray-800 pb-1">
      <div className="flex justify-between max-w-[1400px] mx-auto px-2 text-gray-800 dark:text-gray-100">
        <Link to="/" className="flex">
          <img
            className="w-10 h-10 mt-2"
            src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
            alt="Logo"
          />
          <h1 className="m-1 font-bold text-4xl text-sky-600 dark:text-sky-400">
            hungerly
          </h1>
        </Link>
        <div className="flex mt-4">
          <Link
            to="/admin"
            className="flex bg-gray-100 dark:bg-gray-700 border rounded-sm px-2 py-1 text-sky-600 dark:text-sky-400 mx-1 hover:scale-105 hover:text-sky-400"
          >
            <RiAdminLine className="mt-1 mr-1" />
            Admin
          </Link>
          <Link
            to="/orders"
            className="flex bg-gray-100 dark:bg-gray-700 border rounded-sm px-2 py-1 text-sky-600 dark:text-sky-400 mx-1 hover:scale-105 hover:text-sky-400"
          >
            <IoFastFood className="mt-1 mr-1" />
            My Orders
          </Link>
          <Link
            to="/cart"
            className="flex bg-gray-100 dark:bg-gray-700 border rounded-sm px-2 py-1 text-sky-600 dark:text-sky-400 mx-1 hover:scale-105 hover:text-sky-400"
          >
            <BsCart3 className="mt-1 mr-1" />
            Cart{` (${quantity})`}
          </Link>
          {localStorage.getItem("isLoggedIn") ? (
            <button
              onClick={handleLogout}
              className="flex bg-gray-100 dark:bg-gray-700 border rounded-sm px-2 py-1 text-sky-600 dark:text-sky-400 mx-1 hover:scale-105 hover:text-sky-400"
            >
              <CiLogout className="mt-1 mr-1" />
              Logout
            </button>
          ) : (
            <Link
              to="/user-auth"
              className="flex bg-gray-100 dark:bg-gray-700 border rounded-sm px-2 py-1 text-sky-600 dark:text-sky-400 mx-1 hover:scale-105 hover:text-sky-400"
            >
              <MdAccountCircle className="mt-1 mr-1" />
              Sign Up/Log In
            </Link>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" bg-gray-100 dark:bg-gray-700 px-4 py-1 mx-1 border rounded-sm text-sky-600 dark:text-sky-400 mx-1 hover:scale-105 hover:text-sky-400"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
