import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';

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
        const contactsNames = state.map(contact => contact.name);
        if(contactsNames.includes(action.payload.name)) {
          toast.error(`${contactsNames} is already in contacts.`);
          return;
        }
        state.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      // const index = state.findIndex(contact => contact.id === action.payload);
      const index = state.filter(contact => contact.id !== action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;