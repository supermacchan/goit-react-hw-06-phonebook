import { createSlice } from "@reduxjs/toolkit";

// const state = {
//   contacts: [],
//   filter: "",
// };
  
const filterSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
      return action.payload;
    },
  },
});
  
export const { filterContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;