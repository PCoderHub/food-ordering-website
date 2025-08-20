import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveMenuItem } from "../features/item/itemSlice";

function ItemCard({ item }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(saveMenuItem(item));
    navigate(`/menu/${item.id}`)
  }

  return (
    <div className="h-96 p-1 border rounded-md border-solid border-black hover:scale-102" onClick={handleClick}>
      <img src={item.img} className="w-full h-2/3 object-cover rounded-sm" />
      <div className="p-1 py-2">
        <p className="text-gray-700 font-bold">{item.name}</p>
        <p className="font-bold">₹{item.price}</p>
        <button className="p-1 px-2 mt-2 bg-sky-500 border rounded-full text-white">
          Click to View
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
