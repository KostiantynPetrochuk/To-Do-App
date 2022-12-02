import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

export default function NavBar() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Divider />
			<Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
				<LinkTab label="All" href="/all" />
				<LinkTab label="Active" href="/active" />
				<LinkTab label="Completed" href="/completed" />
			</Tabs>
			<Divider />
		</Box>
	);
}