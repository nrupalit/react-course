import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCalenderFormOpen: false,
    isEventDetailsOpen: false
}
export const modalSlicer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setCalenderFormModal(state, action) {
            state.isEventDetailsOpen = false;
            state.isCalenderFormOpen = action.payload;
        },
        setEventDetailsModal(state, action) {
            state.isEventDetailsOpen = action.payload;
            state.isCalenderFormOpen = false;
        },
        closeAllModal(state) {
            state.isCalenderFormOpen = false;
            state.isEventDetailsOpen = false;
        }
    }
});