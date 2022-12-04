import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";

export const addTask = (body) => ({
	type: ADD_TASK,
	body
});

export const toggleStatus = (id) => ({
	type: TOGGLE_STATUS,
	id
});

export const deleteTask = (id) => ({
	type: DELETE_TASK,
	id
});