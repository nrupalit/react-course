import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { eventSlicer } from "./eventsReducer";
import { modalSlicer } from "./modalReducer";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    event: eventSlicer.reducer,
    modal: modalSlicer.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
})
export const persistor = persistStore(store)
