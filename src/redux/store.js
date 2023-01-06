import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
    },
});

export const persistor = persistStore(store);

// {
//   contacts: [],
//   filter: ""
// }