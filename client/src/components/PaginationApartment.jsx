/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';

export default function PaginationApartment({ onPageChange, searchResults }) {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (event, page) => {
		setCurrentPage(page);
		onPageChange(page);
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [searchResults]);
	return (
		<Pagination
			sx={{ margin: '50px 0', justifyContent: 'center', display: 'flex' }}
			// count={Math.ceil(searchResults?.length / pageSize)}
			count={3}
			variant="outlined"
			shape="rounded"
			color="primary"
			size="large"
			page={currentPage}
			onChange={handlePageChange}
		/>
	);
}
