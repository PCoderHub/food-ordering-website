import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addUserOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addUserOrder } = orderSlice.actions;
export default orderSlice.reducer;
