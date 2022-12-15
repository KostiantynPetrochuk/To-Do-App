import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "@@tasks",
  initialState: [],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        const newTask = action.payload;
        console.log(newTask);
        state.push(newTask);
      },
      prepare: (body) => ({
        payload: {
          id: nanoid(),
          body,
          isDone: false,
        },
      }),
    },
    toggleStatus: (state, action) => {
      const id = action.payload;
      const task = state.find((task) => task.id === id);
      task.isDone = !task.isDone;
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, toggleStatus, deleteTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

export const selectAllTasks = (state) => state.tasks;

export const selectActiveTasks = (state) =>
  state.tasks.filter((task) => !task.isDone);

export const selectVisibleTasks = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.tasks;
    }
    case "active": {
      return state.tasks.filter((task) => !task.isDone);
    }
    case "completed": {
      return state.tasks.filter((task) => task.isDone);
    }

    default: {
      return state.tasks;
    }
  }
};
