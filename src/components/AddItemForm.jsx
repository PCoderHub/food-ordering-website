import { useState } from "react";

function AddItemForm({ categoryId, onAddItem }) {
  const [newItem, setNewItem] = useState({
    name: "",
    img: "",
    description: "",
    price: "",
  });

  const handleAdd = () => {
    onAddItem(categoryId, newItem);
    setNewItem({ name: "", img: "", description: "", price: "" });
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
        Add Item
      </h4>
      <input
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        className="border p-2 w-full rounded-full mb-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-500"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newItem.img}
        onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
        className="border p-2 w-full rounded-full mb-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-500"
      />
      <textarea
        placeholder="Description"
        value={newItem.description}
        onChange={(e) =>
          setNewItem({ ...newItem, description: e.target.value })
        }
        className="border p-2 w-full rounded-lg mb-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-500"
      />
      <input
        type="number"
        placeholder="Price"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        className="border p-2 w-full rounded-full mb-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-500"
      />
      <button
        onClick={handleAdd}
        className="bg-sky-600 text-white px-4 py-2 rounded-full"
      >
        Add Item
      </button>
    </div>
  );
}

export default AddItemForm;
