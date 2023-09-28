import { Pagination } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';

export default function PaginationApartment() {
	return (
		<Pagination
			sx={{ margin: '50px 0', justifyContent: 'center', display: 'flex' }}
			count={3}
			variant="outlined"
			shape="rounded"
			color="primary"
			size="large"
			onChange={(event) => console.log(event)}
		/>
	);
}
