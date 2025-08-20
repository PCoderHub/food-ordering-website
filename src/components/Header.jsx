import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="flex justify-between max-w-[1400px] mx-auto px-2">
        <Link to="/" className="flex">
          <img className="w-10 h-10 mt-2" src={logo} alt="Logo" />
          <h1 className="m-1 font-bold text-4xl text-[#0941ec]">Hungerly</h1>
        </Link>
        <div className="mt-4">
          <Link className="bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 mr-1 hover:scale-105">
            Menu
          </Link>
          <Link className="bg-gray-100 border rounded-sm px-2 py-1 text-sky-600 ml-1 hover:scale-105">
            Sign Up/Log In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
