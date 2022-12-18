import { createSlice } from '@reduxjs/toolkit';
import { searchMovie } from '../core';

export const searchSlice = createSlice(
    {
        name: "search",
        initialState: {
            value: []
        },
        reducers: {
            change: (state, string) => {
                state.value = searchMovie(string);
            }
        }
    }
);

export const { change } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearch = (state, i = -1) => state.search.slice(0, -1);

//export const selectPreviewSearch = state => state.search.slice(0, 5);