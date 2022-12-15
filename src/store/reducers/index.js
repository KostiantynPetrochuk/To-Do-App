// import { tasksReducer } from "./tasksReducer";
// import { filtersReducer } from "./filtersReducer";
import { filterReducer } from "../filterSlice";

import { tasksReducer } from "../tasksSlice";

export const rootReducer = {
  tasks: tasksReducer,
  filters: filterReducer,
};
