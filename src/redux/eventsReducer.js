import { createSlice } from "@reduxjs/toolkit";
import { getRandomId } from "../commonFunctions/getRandomId";

const initialState = {
    events: [],
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
            const event = {
                ...action.payload,
                id: getRandomId()
            }
            state.events.push(event);
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