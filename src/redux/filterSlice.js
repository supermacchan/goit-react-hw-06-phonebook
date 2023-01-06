import { createSlice } from "@reduxjs/toolkit";

// const state = {
//   contacts: [],
//   filter: "",
// };
  
const filterSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
  
export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;