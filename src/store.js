import { configureStore } from "@reduxjs/toolkit";

import { loadState } from "./localStorage";
import { rootReducer } from "./rootReducer";

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    tasks: persistedState.tasks,
  },
});
