import { SET_FILTER } from "../constants/filtersConst";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
