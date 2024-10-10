import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: undefined
}
export const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        removeToken(state) {
            state.token = undefined;
        }
    }
});