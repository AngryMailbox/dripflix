import { createSlice } from '@reduxjs/toolkit'

export const contentTypeSlice = createSlice(
    {
        name: "type",
        initialState: {
            value: ""
        },
        reducers: {
            change: (state, string) => {
                state.value = string;
            }
        }
    }
);

export const { change, erase } = contentTypeSlice.actions;
export default contentTypeSlice.reducer;