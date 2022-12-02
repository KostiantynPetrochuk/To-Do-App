import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Title from './Title';
import InputForm from './InputForm';
import NavBar from './NavBar';
import TasksList from './TasksList';

function SimpleContainer() {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="sm" >
				<Box sx={{ height: '100vh' }} >
					<Title />
					<InputForm />
					<NavBar />
					<TasksList />
				</Box>
			</Container>
		</>
	);
}

export default SimpleContainer;