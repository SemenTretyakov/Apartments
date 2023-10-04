/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Typography } from '@mui/material';
import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
import Header from '../components/Header';
import PaginationApartment from '../components/PaginationApartment';
import { useFilterSearchQuery } from '../redux/ApartmentApi';
import { useState, useEffect } from 'react';
import SortApart from '../components/SortApart';

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortParam, setSortParam] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 8;

	const { data: searchResults, isLoading } = useFilterSearchQuery({
		priceSort: sortParam === 1 ? 'desc' : 'asc',
		areaSort: sortParam === 3 ? 'desc' : 'asc',
		searchTerm,
		page: currentPage,
		pageSize,
	});

	const handleSortChange = (event) => {
		const newValue = event.target.value;
		setSortParam(newValue);
	};

	const handleSearchChange = (event) => {
		const newValue = event.target.value;
		setSearchTerm(newValue);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [sortParam, searchTerm]);
	return (
		<>
			<Header searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
			<Container maxWidth="xl" sx={{ mt: '70px' }}>
				<SortApart sortParam={sortParam} handleSortChange={handleSortChange} />

				<Typography variant="h2">Список квартир</Typography>
				<div>
					{isLoading
						? [...new Array(3)].map((_, index) => (
								<SkeletonApartments key={index} />
						  ))
						: searchResults &&
						  searchResults.map((apartment) => (
								<ApartmentCard key={apartment.id} apartment={apartment} />
						  ))}
				</div>
				<PaginationApartment
					onPageChange={handlePageChange}
					searchResults={searchResults}
					pageSize={pageSize}
				/>
			</Container>
		</>
	);
}
