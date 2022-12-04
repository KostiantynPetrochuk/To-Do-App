import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import { rootReducer } from "./reducers/index";


//store
const persistedState = loadState();
console.log(persistedState);

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: {
		tasks: persistedState.tasks
	}
});

store.subscribe(() => {
	saveState({
		tasks: store.getState().tasks
	});
});