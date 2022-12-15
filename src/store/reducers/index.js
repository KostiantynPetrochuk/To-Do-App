import { tasksReducer } from "./tasksReducer";
import { filtersReducer } from "./filtersReducer";

export const rootReducer = {
  tasks: tasksReducer,
  filters: filtersReducer,
};
