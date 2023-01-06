import { createSlice } from "@reduxjs/toolkit";

// const state = {
//   contacts: [],
//   filter: "",
// };

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.unshift(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;