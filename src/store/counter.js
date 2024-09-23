import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    counter: 0,
    isHideCounter: false,
}

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toogle_counter(state) {
            state.isHideCounter = !state.isHideCounter;
        },
    }
});
