import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InputForm() {
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				fullWidth
			/>
			<Button variant="contained" sx={{ marginTop: 50 }} >
				Add
			</ Button>
		</Box>
	);
}