import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: [{
        end: "2024-08-31T18:30:00.000Z",
        start: "2024-08-31T18:30:00.000Z",
        title: "Sample Event"
    }],
    date: {
        start: undefined,
        end: undefined
    }
};

export const eventSlicer = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent(state, action) {
            // const event = {
            //     ...action.payload,
            //     start: action.payload.start.getTime()
            // }
            state.events.push(action.payload);
            localStorage.setItem('events', JSON.stringify(state.events));
        },
        removeEvent(state, action) {
            const sliceEventIndex = state.events.findIndex(event => event.id === action.payload)
            state.events = state.events.slice(sliceEventIndex, 1);
            localStorage.setItem('events', JSON.stringify(state.events))
        },
        addLocalStorageEvents(state, action) {
            state.events = [...action.payload];
        },
        setDate(state, action) {
            state.date = action.payload;
        },
        removeDate(state) {
            state.date = {
                start: undefined,
                end: undefined
            }
        }
    }
})