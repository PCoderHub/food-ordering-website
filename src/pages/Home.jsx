import React, { useState } from "react";
//import { foodCategories } from "../assets/utils/foodCategories";
import { FaSearch } from "react-icons/fa";
import ItemCard from "../components/ItemCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const [error, setError] = useState("");

  const foodCategories = useSelector((state) => state.inventory.inventory);

  const allFoodItems = [];
  foodCategories.forEach((category) => {
    category.items.forEach((item) => {
      allFoodItems.push(item);
    });
  });

  const [searchedList, setSearchedList] = useState([...allFoodItems]);

  const handleSearch = (e) => {
    let searchInput = e.target.value;
    if (!searchInput.trim()) {
      setSearchedList([...allFoodItems]);
      setError("");
      return;
    }

    const searchedFoodList = allFoodItems.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (searchedFoodList.length === 0) {
      setError("No such dish found!!");
      setSearchedList([]);
    } else {
      setError("");
      setSearchedList([...searchedFoodList]);
    }
  };

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
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-2 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-4xl text-gray-700 my-5">Featured</h2>
          <div className="grid grid-cols-8">
            {foodCategories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="flex w-5/6 h-2/3 p-1 border rounded-md border-solid border-black hover:scale-102"
              >
                <img
                  src={category.img}
                  className="w-1/2 object-cover rounded-sm"
                />
                <p className="text-center text-xs my-auto ml-2 font-bold">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
          <h2 className="font-bold text-4xl text-gray-700 my-5">Menu</h2>
          <div className="grid grid-cols-4 gap-4 my-4 mt-10">
            {searchedList.length > 0 ? (
              searchedList.map((item) => <ItemCard key={item.id} item={item} />)
            ) : (
              <p className="text-lg text-center mx-auto text-red-500 italic">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
