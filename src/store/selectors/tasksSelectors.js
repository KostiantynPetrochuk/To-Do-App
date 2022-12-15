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
