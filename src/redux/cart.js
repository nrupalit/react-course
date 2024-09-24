import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT } from "../constants/cartConst";

const initialState = {
    checkoutCartItems: 1,
    products: [
        PRODUCT
    ],
    isCheckout: false
};

export const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state) {
            state.products = [...state.products, PRODUCT];
            state.checkoutCartItems = state.products.length;
        },
        addItem(state, action) {
            state.products[action.payload].quantity++;
        },
        removeItem(state, action) {
            state.products[action.payload].quantity--;
        },
        checkout(state) {
            state.isCheckout = true;
        },
        reset(state) {
            state.checkoutCartItems = initialState.checkoutCartItems;
            state.products = initialState.products;
            state.isCheckout = false;
        }
    }
})