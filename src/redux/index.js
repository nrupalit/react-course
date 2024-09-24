import { configureStore } from "@reduxjs/toolkit";
import { cartSlicer } from "./cart";

const store = configureStore({
    reducer: {
        cart: cartSlicer.reducer
    }
})

export default store;