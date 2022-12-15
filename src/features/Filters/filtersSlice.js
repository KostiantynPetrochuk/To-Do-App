import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;

export const selectActiveFilter = (state) => state.filters;
