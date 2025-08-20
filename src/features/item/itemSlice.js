import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: {},
}

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        saveMenuItem: (state, action) => {
            state.item = {...action.payload}
        },
    },
})

export const { saveMenuItem } = itemSlice.actions;
export default itemSlice.reducer;