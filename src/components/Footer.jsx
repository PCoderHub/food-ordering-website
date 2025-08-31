import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-500 dark:bg-gray-900 mt-20 text-white dark:text-gray-300">
      <div className="flex flex-col">
        <button className="m-1 text-white hover:underline hover:text-sky-500">
          <Link to="/about">About Us</Link>
        </button>
        <button className="m-1 text-white hover:underline hover:text-sky-500">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-evenly m-2 text-white p-2">
          <FaFacebook className="mx-1" />
          <FaTwitter className="mx-1" />
          <FaInstagram className="mx-1" />
        </div>
        <p className="text-white m-2">&copy;2025 Hungerly</p>
      </div>
    </footer>
  );
}

export default Footer;
