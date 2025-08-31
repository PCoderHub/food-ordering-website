import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCategory,
  addNewItem,
  removeCategory,
  removeMenuItem,
} from "../features/inventory/inventorySlice";
//import { foodCategories as initialCategories } from "../assets/utils/foodCategories";

function Dashboard() {
  const initialCategories = useSelector((state) => state.inventory.inventory);
  const [categories, setCategories] = useState(initialCategories);

  const dispatch = useDispatch();

  // State for new category
  const [newCategory, setNewCategory] = useState({
    name: "",
    img: "",
    items: [],
  });

  // State for new item
  const [newItem, setNewItem] = useState({
    name: "",
    img: "",
    description: "",
    price: "",
  });

  // Add Category
  const handleAddCategory = (e) => {
    e.preventDefault();
    const category = {
      id: Math.max(...initialCategories.map((c) => c.id)) + 1,
      ...newCategory,
      items: [],
    };
    dispatch(addNewCategory(category));
    setCategories([...categories, category]);
    setNewCategory({ name: "", img: "" });
  };

  // Add Item to a Category
  const handleAddItem = (categoryId) => {
    const category = initialCategories.find((c) => c.id === categoryId);
    const newItemid = category.items.length
      ? Math.max(...category.items.map((item) => item.id))
      : category.id * 100;
    const item = {
      id: newItemid + 1,
      ...newItem,
      price: Number(newItem.price),
    };

    dispatch(addNewItem({ categoryId, item }));
    const updatedCategories = categories.map((cat) =>
      cat.id === categoryId ? { ...cat, items: [...cat.items, item] } : cat
    );
    setCategories(updatedCategories);

    setNewItem({ name: "", img: "", description: "", price: "" });
  };

  const handleRemoveCategory = (categoryId) => {
    dispatch(removeCategory(categoryId));
    setCategories(categories.filter((cat) => cat.id !== categoryId));
  };

  const handleRemoveItem = (categoryId, itemId) => {
    dispatch(removeMenuItem({ categoryId, itemId }));
    const updatedCategories = categories.map((cat) =>
      cat.id === categoryId
        ? { ...cat, items: cat.items.filter((item) => item.id !== itemId) }
        : cat
    );
    setCategories(updatedCategories);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-600 mb-4">Manage Menu</h2>

      {/* Add Category Form */}
      <div className="border p-4 rounded mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Add Category
        </h3>
        <form onSubmit={handleAddCategory} className="space-y-3">
          <input
            type="text"
            placeholder="Category Name"
            value={newCategory.name}
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
            className="border p-2 w-full rounded-full"
            required
          />
          <input
            type="text"
            placeholder="Category Image URL"
            value={newCategory.img}
            onChange={(e) =>
              setNewCategory({ ...newCategory, img: e.target.value })
            }
            className="border p-2 w-full rounded-full"
            required
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-4 py-2 rounded-full"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* Add Items to Each Category */}
      <div>
        {categories.map((cat) => (
          <div key={cat.id} className="border p-4 mb-4 rounded">
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 hover:shadow-lg transition duration-300">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-20 h-20 rounded-lg object-cover border"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {cat.items.length} items
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveCategory(cat.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                >
                  Remove
                </button>
              </div>

              {/* Items List */}
              <div className="mt-4 border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Items
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cat.items.map((item) => (
                    <li
                      key={item.id}
                      className="border rounded-md p-3 flex items-center gap-3 hover:shadow-md transition"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(cat.id, item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Add Item Form */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-gray-700">Add Item</h4>
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="border p-2 w-full rounded-full mb-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newItem.img}
                onChange={(e) =>
                  setNewItem({ ...newItem, img: e.target.value })
                }
                className="border p-2 w-full rounded-full mb-2"
              />
              <textarea
                placeholder="Description"
                value={newItem.description}
                onChange={(e) =>
                  setNewItem({ ...newItem, description: e.target.value })
                }
                className="border p-2 w-full rounded-lg mb-2"
              />
              <input
                type="number"
                placeholder="Price"
                value={newItem.price}
                onChange={(e) =>
                  setNewItem({ ...newItem, price: e.target.value })
                }
                className="border p-2 w-full rounded-full mb-2"
              />
              <button
                onClick={() => handleAddItem(cat.id)}
                className="bg-sky-600 text-white px-4 py-2 rounded-full"
              >
                Add Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
