import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {isAuthenticated: false};

export const authSlicer = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});