
import { configureStore } from "@reduxjs/toolkit";
import { authSlicer } from "./auth";
import { counter } from "./counter";


// const initialStore = (state, action) => {
//     switch (action.type) {
//         case COUNTER.INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             };
//         case COUNTER.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             };
//         case COUNTER.INCREASE:
//             return {
//                 ...state,
//                 counter: state.counter + action.counter
//             };
//         case TOOGLE_COUNTER:
//             return {
//                 ...state,
//                 isHideCounter: !state.isHideCounter
//             }
    
//         default:
//             return state;
//     }
// }
const store = configureStore({
    reducer: {
        counter: counter.reducer,
        auth: authSlicer.reducer
    }
});




export default store;