import { createSlice } from '@reduxjs/toolkit'

export const searchQuerySlice = createSlice(
    {
        name: "query",
        initialState: {
            value: ""
        },
        reducers: {
            change: (state, string) => {
                state.value = string;
            },
            erase: state => {
                state.value = "";
            }
        }
    }
);

export const { change, erase } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;