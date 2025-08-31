import React, { useState } from "react";
import { foodCategories as initialCategories } from "../assets/utils/foodCategories";

function Dashboard() {
  const [categories, setCategories] = useState(initialCategories);

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
      id: Date.now(),
      ...newCategory,
      items: [],
    };
    setCategories([...categories, category]);
    setNewCategory({ name: "", img: "" });
  };

  // Add Item to a Category
  const handleAddItem = (categoryId) => {
    const item = {
      id: Date.now(),
      ...newItem,
      price: Number(newItem.price),
    };

    const updatedCategories = categories.map((cat) =>
      cat.id === categoryId ? { ...cat, items: [...cat.items, item] } : cat
    );
    setCategories(updatedCategories);

    setNewItem({ name: "", img: "", description: "", price: "" });
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
            {/* <h3 className="text-lg font-bold text-gray-700">{cat.name}</h3>
            <img src={cat.img} alt={cat.name} className="w-32 h-20 object-cover my-2" />
            <ul className="ml-6">
              {cat.items.map((item) => (
                <li key={item.id}>{item.name} - ₹{item.price}</li>
              ))}
            </ul> */}

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
