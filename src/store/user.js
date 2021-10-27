import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "userSlice",
    initialState: {
        parent: null,
        children: null,
    },
    reducers:{
        setForm : (state, { payload }) => {
            const { parent, child } = payload;
            state.parent = parent;
            state.children = child;
        }
    }
});

export const { setForm } = slice.actions;

export default slice.reducer;