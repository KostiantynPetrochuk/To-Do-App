import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";

export const tasksReducer = (state = [], action) => {
  //reducer
  switch (action.type) {
    case ADD_TASK: {
      return [
        ...state,
        {
          id: Date.now(),
          body: action.body,
          isDone: false,
        },
      ];
    }
    case DELETE_TASK: {
      return state.filter((task) => task.id !== action.id);
    }
    case TOGGLE_STATUS: {
      return state.map((task) =>
        task.id === action.id ? { ...task, isDone: !task.isDone } : task
      );
    }

    default:
      return state;
  }
};
