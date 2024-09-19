import {legacy_createStore as createStore} from 'redux'
import { COUNTER, TOOGLE_COUNTER } from '../constants/counter';

const initialState = { 
    counter: 0,
    isHideCounter: false,
}

const initialStore = (state, action) => {
    switch (action.type) {
        case COUNTER.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case COUNTER.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case COUNTER.INCREASE:
            return {
                ...state,
                counter: state.counter + action.counter
            };
        case TOOGLE_COUNTER:
            return {
                ...state,
                isHideCounter: !state.isHideCounter
            }
    
        default:
            return state;
    }
}
const store = createStore(initialStore, initialState);

export default store;