import { createSlice } from "@reduxjs/toolkit";

// const state = {
//   contacts: [],
//   filter: "",
// };

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;