import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../store/selectors/filterSelectors';
import { setFilter } from '../store/actions/filtersActions';

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

	const dispatch = useDispatch();
	const activeFilter = useSelector(selectActiveFilter);

	return (
		<Box sx={{ width: '100%' }}>
			<Divider />
			<Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
				<LinkTab onClick={() => dispatch(setFilter("all"))} label="All" /* href="/all" */ />
				<LinkTab onClick={() => dispatch(setFilter("active"))} label="Active" /* href="/active" */ />
				<LinkTab onClick={() => dispatch(setFilter("completed"))} label="Completed" /* href="/completed" */ />
			</Tabs>
			<Divider />
		</Box>
	);
}