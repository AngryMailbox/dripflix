import { createSlice } from '@reduxjs/toolkit'
import { getContent } from "../core"

export const contentSlice = createSlice(
    {
        name: "content",
        initialState: {
            value: []
        },
        reducers: {
            change: (state, string) => {
                state.value = getContent("trending");
            }
        }
    }
);

export const { change, erase } = contentSlice.actions;
export default contentSlice.reducer;

export const selectContent = (state, i = 6) => state.content.slice(0, i);