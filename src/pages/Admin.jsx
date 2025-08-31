import React, { useState } from "react";
import { FaTachometerAlt, FaList, FaUsers } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import Users from "../components/Users";

function Admin() {
  const menus = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Orders", icon: <FaList /> },
    { name: "Users", icon: <FaUsers /> },
  ];

  const [chosenMenu, setChosenMenu] = useState("Dashboard");

  const renderAdminMenu = () => {
    if(chosenMenu == "Dashboard") {
      return <Dashboard />;
    } else if(chosenMenu === "Orders") {
      return <Orders />;
    } else if (chosenMenu === "Users") {
      return <Users />;
    } else {
      return "";
    }
  }

  return (
    <div>
      <div>
        <div className="flex mx-2">
          <img
            className="w-10 h-10 mt-2"
            src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
            alt="Logo"
          />
          <Link 
          to="/"
          ><h1 className="m-1 font-bold text-4xl text-sky-600">
            Hungerly Admin
          </h1></Link>
        </div>
      </div>
      <div className="flex">
        <ul className="pt-6 w-1/5 px-2">
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              onClick={() => setChosenMenu(menu.name)}
              className={`flex items-center gap-x-4 p-3 rounded-md cursor-pointer text-lg mb-2
        hover:bg-gray-200 transition-all duration-200
        ${index === 0 ? "bg-gray-200" : ""} // Active menu example
      `}
            >
              <span className="text-xl">{menu.icon}</span>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 whitespace-nowrap`}
              >
                {menu.name}
              </span>
            </NavLink>
          ))}
        </ul>

        <div className="container h-full w-full m-10 border rounded-md">
          <h2 className="m-1 font-bold text-3xl text-gray-600 text-center">{chosenMenu}</h2>
          {renderAdminMenu()}
        </div>
      </div>
    </div>
  );
}

export default Admin;
