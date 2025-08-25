import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        saveCartItem: (state, action) => {
            const cartItem = {...action.payload}
            state.cart.push(cartItem);
        },
        incrementQuantity: (state, action) => {
            const cartItem = state.cart.find((item) => action.payload.id === item.id);
            cartItem.quantity ++;
        },
        decrementQuantity: (state, action) => {
            state.cart.filter((item) => action.payload.id === item.id)[0].quantity --;
        },
        emptyCartItems: (state) => {
            state.cart = [];
        }
    },
})

export const { saveCartItem, incrementQuantity, decrementQuantity, emptyCartItems } = cartSlice.actions;
export default cartSlice.reducer;