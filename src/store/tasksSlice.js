import { createSlice } from "@reduxjs/toolkit";

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
          id: Date.now(),
          // id: nanoid(),
          body,
          isDone: false,
        },
      }),
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
  },
});

export const { addTask, toggleStatus, deleteTask } = tasksSlice.actions; //this is actions

export const tasksReducer = tasksSlice.reducer;
