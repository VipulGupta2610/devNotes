import { createSlice } from "@reduxjs/toolkit";

const abcSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            state.push(action.payload)

        },
    }
}
)

export const { AddItem, RemoveItem } = abcSlice.actions


export default abcSlice.reducer  
