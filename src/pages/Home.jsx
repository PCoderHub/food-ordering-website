import React from "react";
import { foodCategories } from "../assets/utils/foodCategories";
import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <>
      <img
        src="https://c8.alamy.com/comp/P3WFK6/food-cooking-ingredient-food-background-on-white-wooden-table-top-view-long-banner-format-P3WFK6.jpg"
        alt=""
        className="w-full object-cover absolute top-0 -z-40"
      />
      <div className="flex flex-col justify-center items-center bg-white rounded-xl mx-auto w-1/2 h-48 mt-30 shadow-xl">
        <div>
          <label htmlFor="search" className="ml-2">
            Search your favorite dish:
          </label>
          <br />
          <div className="relative flex w-full">
            <FaSearch className="absolute left-4 top-6 text-lg text-sky-500" />
            <input
              type="text"
              placeholder="Search..."
              maxLength={43}
              name="search"
              id="search"
              className="w-96 border rounded-full p-3 px-10 mt-2"
            />
            <button className="bg-sky-500 hover:bg-sky-600 rounded-full absolute right-1 top-[13px] px-4 py-2 text-white font-bold">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-2 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-4xl text-gray-700 my-5">Featured</h2>
          <div className="grid grid-cols-4">
            {foodCategories.map((category) => (
              <div
                key={category.id}
                className="flex w-5/6 h-2/3 p-1 border rounded-md border-solid border-black hover:scale-102"
              >
                <img
                  src={category.img}
                  className="w-1/2 object-cover rounded-sm"
                />
                <p className="text-center my-auto ml-2 font-bold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
