import { SET_FILTER } from "../constants/filtersConst";

import { createAction } from "@reduxjs/toolkit";

// export const setFilter = (filter) => ({
//   type: SET_FILTER,
//   filter,
// });

export const setFilter = createAction(SET_FILTER, (filter) => ({
  payload: { filter },
}));
