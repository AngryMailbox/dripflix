import { createSlice } from '@reduxjs/toolkit'

export const searchPageSlice = createSlice(
    {
        name: "page",
        initialState: {
            value: []
        },
        reducers: {
            increment: state => {

            },
            decrement: state => {

            }
        }
    }
)

export const { increment, decrement } = searchPageSlice.actions;

export default searchPageSlice.reducer;