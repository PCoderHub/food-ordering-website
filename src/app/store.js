import { configureStore } from '@reduxjs/toolkit'
import itemReducer from "../features/item/itemSlice"
import cartReducer from "../features/cart/cartSlice"
import inventoryReducer from '../features/inventory/inventorySlice'

export const store = configureStore({
  reducer: {
    item: itemReducer,
    cart: cartReducer,
    inventory: inventoryReducer,
  },
})