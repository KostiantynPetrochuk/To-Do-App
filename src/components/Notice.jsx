import Snackbar from '@mui/material/Snackbar';
import { forwardRef } from 'react';

import MuiAlert from '@mui/material/Alert';

export const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Notice = (props) => {
	const { openNotice, handleCloseNotice, noticeBody, severity } = props;
	return (
		<Snackbar open={openNotice} autoHideDuration={6000} onClose={handleCloseNotice}>
			<Alert onClose={handleCloseNotice} severity={severity} sx={{ width: '100%' }}>
				{noticeBody}
			</Alert>
		</Snackbar>
	)
};

