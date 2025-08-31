import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";

function Admin() {
  const menus = [
    { name: "Inventory", icon: <MdInventory /> },
    { name: "Orders", icon: <FaList /> },
  ];

  const [chosenMenu, setChosenMenu] = useState("Inventory");

  const renderAdminMenu = () => {
    if (chosenMenu == "Inventory") {
      return <Dashboard />;
    } else if (chosenMenu === "Orders") {
      return <Orders />;
    } else {
      return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex mx-2 items-center">
        <img
          className="w-10 h-10 mt-2"
          src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
          alt="Logo"
        />
        <Link to="/">
          <h1 className="m-1 font-bold text-4xl text-sky-600">
            Hungerly Admin
          </h1>
        </Link>
      </div>
      <div className="flex">
        <ul className="pt-6 w-1/5 px-2">
          {menus.map((menu, index) => (
            <button
              key={index}
              onClick={() => setChosenMenu(menu.name)}
              className={`flex items-center gap-x-4 p-3 rounded-md cursor-pointer text-lg mb-2
        hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 w-full
        ${chosenMenu === menu.name ? "bg-gray-200 dark:bg-gray-700" : ""} 
      `}
            >
              <span className="text-xl text-black dark:text-white">
                {menu.icon}
              </span>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 whitespace-nowrap text-black dark:text-white`}
              >
                {menu.name}
              </span>
            </button>
          ))}
        </ul>

        <div className="container h-full w-full m-10 border rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
          <h2 className="m-1 font-bold text-3xl text-gray-600 dark:text-gray-200 text-center">
            {chosenMenu}
          </h2>
          {renderAdminMenu()}
        </div>
      </div>
    </div>
  );
}

export default Admin;
