import { createSlice } from "@reduxjs/toolkit";
import { getRandomId } from "../commonFunctions/getRandomId";

const initialState = {
    events: [],
    selectedEvent: {
        start: undefined,
        end: undefined,
        title: undefined,
        id: undefined
    }
};

export const eventSlicer = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent(state, action) {
            // Edit event
            if (action.payload.id) {
                const eventIndex = state.events.findIndex(event => event.id === action.payload.id);
                if (eventIndex === -1) {
                    console.error("Index not found");
                }
                state.events[eventIndex] = action.payload;
            } else {
                // new event
                const event = {
                    ...action.payload,
                    id: getRandomId()
                }
                state.events.push(event);
            }
            localStorage.setItem('events', JSON.stringify(state.events));
        },
        removeEvent(state, action) {
            state.events = state.events.filter(event => event.id !== action.payload);
            localStorage.setItem('events', JSON.stringify(state.events))
        },
        addLocalStorageEvents(state, action) {
            const events = action.payload.map(event => {
                if (!event.id) {
                    return { ...event, id: getRandomId() }
                }
                return { ...event }
            });
            localStorage.setItem('events', JSON.stringify(events))
            state.events = [...events];
        },
        setSelectedEvent(state, action) {
            state.selectedEvent = action.payload;
        },
        removeSelectedEvent(state) {
            state.selectedEvent = {
                start: undefined,
                end: undefined,
                title: undefined,
                id: undefined
            }
        }
    }
})