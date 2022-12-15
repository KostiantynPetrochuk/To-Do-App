import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";
import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from '@reduxjs/toolkit';
// export const addTask = (body) => ({
//   type: ADD_TASK,
//   body,
// });
export const addTask = createAction(ADD_TASK, (body) => ({
  payload: {
    id: Date.now(),
    // id: nanoid(),
    body,
    isDone: false,
  },
}));

// export const toggleStatus = (id) => ({
//   type: TOGGLE_STATUS,
//   id,
// });

export const toggleStatus = createAction(TOGGLE_STATUS);

// export const deleteTask = (id) => ({
//   type: DELETE_TASK,
//   id,
// });

export const deleteTask = createAction(DELETE_TASK);
