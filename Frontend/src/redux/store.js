import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cartRedux"
import userReducer from "./userRedux"

import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer })
const persistReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDARTE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    })
})

export let persisitor = persistStore(store)