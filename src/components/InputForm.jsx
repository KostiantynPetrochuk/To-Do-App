import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../store';
import { addTask } from '../store/actions/tasksActions';
import { selectAllTasks } from '../store/selectors/tasksSelectors';



export default function InputForm() {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addTask(event.target.body.value));
		event.target.reset();
	}


	// const tasksList = useSelector(state => selectAllTasks(state));
	// const handleSaveTasks = () => {

	// 	try {
	// 		const stateToBeSaved = JSON.stringify(tasksList);
	// 		localStorage.setItem("state", stateToBeSaved);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}

	// 	console.log(tasksList);
	// }

	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, },
			}}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<TextField
				id="outlined-basic"
				label="New Task"
				variant="outlined"
				name='body'
				fullWidth
			/>
			<Button
				type='submit'
				variant="contained"
				sx={{ marginTop: 50 }} >
				Add
			</ Button>
			<Button
				variant="contained"
				color="success"
			// onClick={handleSaveTasks}
			>
				Save
			</Button>
		</Box>
	);
}