import { configureStore } from "@reduxjs/toolkit";
import { eventSlicer } from "./eventsReducer";
import { modalSlicer } from "./modalReducer";

const store = configureStore({
    reducer: {
        event: eventSlicer.reducer,
        modal: modalSlicer.reducer,
    }
});

export default store;