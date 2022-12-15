export const selectAllTasks = (state) => state.tasks;

export const selectActiveTasks = (state) =>
  state.tasks.filter((task) => !task.status);

export const selectVisibleTasks = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.tasks;
    }
    case "active": {
      return state.tasks.filter((task) => !task.status);
    }
    case "completed": {
      return state.tasks.filter((task) => task.status);
    }

    default: {
      return state.tasks;
    }
  }
};
