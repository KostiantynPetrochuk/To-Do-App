import { filtersReducer } from "./features/Filters/filtersSlice";
import { tasksReducer } from "./features/Tasks/tasksSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
