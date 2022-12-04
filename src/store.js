import { configureStore } from '@reduxjs/toolkit';

const tasks = (state = [], action) => { //reducer
	switch (action.type) {
		case "ADD_TASK": {
			return [
				...state,
				{
					id: Date.now(),
					body: action.body,
					status: false
				}
			]
		}
		case "DELETE_TASK": {
			return state.filter((task) => task.id !== action.id);
		}
		case "TOGGLE_STATUS": {
			return state.map(task => (
				task.id === action.id
					? {
						...task,
						status: !task.status,
					} : task
			))
		}

		default:
			return state;
	}
};

//store
export const store = configureStore({
	reducer: {
		tasks: tasks
	},
	preloadedState: {
		tasks: [
			{
				id: 9356874125,
				body: 'Learn React',
				status: false,
			},
			{
				id: 2369857412,
				body: 'Learn Redux',
				status: true,
			},
		],
	}
});

//actions
export const addTask = (body) => ({
	type: "ADD_TASK",
	body
});

export const toggleStatus = (id) => ({
	type: "TOGGLE_STATUS",
	id
});

export const deleteTask = (id) => ({
	type: "DELETE_TASK",
	id
});








