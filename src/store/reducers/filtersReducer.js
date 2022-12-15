// import { SET_FILTER } from "../constants/filtersConst";
import { createReducer } from "@reduxjs/toolkit";

import { setFilter } from "../actions/filtersActions";

export const filtersReducer = createReducer([], (builder) => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload;
  });
});

// export const filtersReducer = (state = "all", action) => {
//   switch (action.type) {
//     case SET_FILTER: {
//       return action.filter;
//     }

//     default: {
//       return state;
//     }
//   }
// };
