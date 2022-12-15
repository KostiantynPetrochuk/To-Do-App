import { SET_FILTER } from "../constants/filtersConst";

export const filtersReducer = (state = "all", action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }

    default: {
      return state;
    }
  }
};
