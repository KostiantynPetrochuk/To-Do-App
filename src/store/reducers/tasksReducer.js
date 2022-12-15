// import { DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";
import { createReducer } from "@reduxjs/toolkit";
import { addTask, toggleStatus, deleteTask } from "../actions/tasksActions";

export const tasksReducer = createReducer([], (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      const newTask = action.payload;
      state.push(newTask);
    })
    .addCase(toggleStatus, (state, action) => {
      const id = action.payload;
      const task = state.find((task) => task.id === id);
      task.isDone = !task.isDone;
    })
    .addCase(deleteTask, (state, action) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    });
});

// export const tasksReducer = (state = [], action) => {
//   //reducer
//   switch (action.type) {
//     case addTask.toString(): {
//       return [
//         ...state,
//         {
//           ...action.payload,
//         },
//       ];
//     }
//     case deleteTask.toString(): {
//       return state.filter((task) => task.id !== action.payload);
//     }
//     case toggleStatus.toString(): {
//       return state.map((task) =>
//         task.id === action.payload ? { ...task, isDone: !task.isDone } : task
//       );
//     }

//     default:
//       return state;
//   }
// };
