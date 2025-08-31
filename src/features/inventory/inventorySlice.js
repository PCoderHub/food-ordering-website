import { createSlice } from "@reduxjs/toolkit";
import { foodCategories as categories } from "../../assets/utils/foodCategories";

const initialState = {
  inventory: [...categories],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addNewCategory: (state, action) => {
      state.inventory.push(action.payload);
    },
    addNewItem: (state, action) => {
      const updatedInventory = state.inventory.map((cat) =>
        cat.id === action.payload.categoryId
          ? { ...cat, items: [...cat.items, action.payload.item] }
          : cat
      );
      state.inventory = updatedInventory;
    },
    updateItem: (state, action) => {
      const { categoryId, itemId, updatedItem } = action.payload;
      state.inventory = state.inventory.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId ? { ...item, ...updatedItem } : item
              ),
            }
          : cat
      );
    },
    removeCategory: (state, action) => {
      state.inventory = state.inventory.filter(
        (cat) => cat.id !== action.payload
      );
    },
    removeMenuItem: (state, action) => {
      const { categoryId, itemId } = action.payload;
      state.inventory = state.inventory.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter((item) => item.id !== itemId) }
          : cat
      );
    },
  },
});

export const {
  addNewCategory,
  addNewItem,
  updateItem,
  removeCategory,
  removeMenuItem,
} = inventorySlice.actions;
export default inventorySlice.reducer;
