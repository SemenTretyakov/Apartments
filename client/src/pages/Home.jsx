// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// // /* eslint-disable no-unused-vars */
// // /* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';
// import { useGetApartmentsQuery } from '../redux/ApartmentApi';
// import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
// import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
// import Header from '../components/Header';
// import PaginationApartment from '../components/PaginationApartment';
// import { generateTitle } from '../utils/generateTitle';
// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import {
// 	setSearchValue,
// 	setSortParam,
// 	setApartmentsData,
// } from '../redux/apartmentSlice';

// export default function Home() {
// 	const dispatch = useDispatch();
// 	const searchValue = useSelector((state) => state.apartments.searchValue);
// 	const sortParam = useSelector((state) => state.apartments.sortParam);
// 	console.log(searchValue, sortParam);

// 	const {
// 		data: apartments,
// 		isLoading,
// 		isError,
// 	} = useGetApartmentsQuery({
// 		search: searchValue,
// 		sortParam: sortParam,
// 	});

// 	useEffect(() => {
// 		console.log('Apartments data:', apartments);
// 		console.log('isLoading:', isLoading);
// 		console.log('isError:', isError);
// 		// Остальной код...
// 	}, [apartments, isLoading, isError]);

// 	const sortAndFilterApartments = (apartments, sortParam) => {
// 		switch (sortParam) {
// 			case 1:
// 				return [...apartments].sort((a, b) => a.price - b.price);
// 			case 2:
// 				return [...apartments].sort((a, b) => b.price - a.price);
// 			case 3:
// 				return [...apartments].sort((a, b) => a.area - b.area);
// 			case 4:
// 				return [...apartments].sort((a, b) => b.area - a.area);
// 			default:
// 				return apartments;
// 		}
// 	};

// 	const handleSortChange = (newValue) => {
// 		dispatch(setSortParam(newValue)); // Диспатч экшена для обновления сортировки
// 	};

// 	// Обработчик изменения параметра поиска
// 	const handleSearchChange = (newValue) => {
// 		dispatch(setSearchValue(newValue)); // Диспатч экшена для обновления поиска
// 	};

// 	// Фильтрация и сортировка квартир
// 	const filteredAndSortedApartments = sortAndFilterApartments(
// 		apartments || [],
// 		sortParam
// 	);

// 	const items = (filteredAndSortedApartments || []).filter((obj) =>
// 		generateTitle(obj).includes(searchValue)
// 	);
// 	console.log(items);

// 	return (
// 		<>
// 			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
// 			<Container maxWidth="xl" sx={{ mt: '70px' }}>
// 				<FormControl variant="standard" sx={{ minWidth: '280px', p: 0 }}>
// 					<InputLabel id="demo-simple-select-label">Сортировка по:</InputLabel>
// 					<Select
// 						labelId="demo-simple-select-label"
// 						id="demo-simple-select"
// 						label="Sort"
// 						value={sortParam}
// 						onChange={(e) => handleSortChange(e.target.value)}
// 						MenuProps={{
// 							anchorOrigin: {
// 								vertical: 'bottom',
// 								horizontal: 'left',
// 							},
// 							transformOrigin: {
// 								vertical: 'top',
// 								horizontal: 'left',
// 							},
// 						}}
// 					>
// 						<MenuItem value={0}>По умолчанию</MenuItem>
// 						<MenuItem value={1}>По цене, сначала дешевые</MenuItem>
// 						<MenuItem value={2}>По цене, сначала дорогие</MenuItem>
// 						<MenuItem value={3}>По площади, сначала малые</MenuItem>
// 						<MenuItem value={4}>По площади, сначала большие</MenuItem>
// 					</Select>
// 				</FormControl>

// 				{/* <Sort sortParam={sortParam} handleSortChange={handleSortChange} /> */}
// 				<Typography variant="h2">Список квартир</Typography>
// 				<div>
// 					{isLoading
// 						? [...new Array(3)].map((_, index) => (
// 								<SkeletonApartments key={index} />
// 						  ))
// 						: items.map((apartment) => (
// 								<ApartmentCard key={apartment.id} apartment={apartment} />
// 						  ))}
// 				</div>
// 				<PaginationApartment />
// 			</Container>
// 		</>
// 	);
// }

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
import { Container, Typography } from '@mui/material';
import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
import Header from '../components/Header';
import { generateTitle } from '../utils/generateTitle';
import PaginationApartment from '../components/PaginationApartment';
import { useGetApartmentsQuery } from '../redux/ApartmentApi';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function Home({ searchValue, setSearchValue }) {
	const [sortParam, setSortParam] = useState(0);
	const { data: apartments, isLoading } = useGetApartmentsQuery(sortParam);
	const [sortedApartments, setSortedApartments] = useState([]);

	const sortApartments = (apartments, sortParam) => {
		switch (sortParam) {
			case 1:
				return [...apartments].sort((a, b) => a.price - b.price);
			case 2:
				return [...apartments].sort((a, b) => b.price - a.price);
			case 3:
				return [...apartments].sort((a, b) => a.area - b.area);
			case 4:
				return [...apartments].sort((a, b) => b.area - a.area);
			default:
				return apartments;
		}
	};

	useEffect(() => {
		console.log('Sort param changed to:', sortParam);
		if (apartments) {
			const sorted = sortApartments(apartments, sortParam);
			console.log('Sorted data:', sorted);
			setSortedApartments(sorted);
		}
	}, [apartments, sortParam]);
	console.log(apartments);

	const handleSortChange = (newValue) => {
		console.log('Sort param changed to:', newValue);
		setSortParam(newValue);
	};

	const items = (sortedApartments || []).filter((obj) =>
		generateTitle(obj).includes(searchValue)
	);

	return (
		<>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<Container maxWidth="xl" sx={{ mt: '70px' }}>
				<FormControl variant="standard" sx={{ minWidth: '280px', p: 0 }}>
					<InputLabel id="demo-simple-select-label">Сортировка по:</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Sort"
						value={sortParam}
						onChange={handleSortChange}
						MenuProps={{
							anchorOrigin: {
								vertical: 'bottom',
								horizontal: 'left',
							},
							transformOrigin: {
								vertical: 'top',
								horizontal: 'left',
							},
						}}
					>
						<MenuItem value={0}>По умолчанию</MenuItem>
						<MenuItem value={1}>По цене, сначала дешевые</MenuItem>
						<MenuItem value={2}>По цене, сначала дорогие</MenuItem>
						<MenuItem value={3}>По площади, сначала малые</MenuItem>
						<MenuItem value={4}>По площади, сначала большие</MenuItem>
					</Select>
				</FormControl>

				{/* <Sort sortParam={sortParam} handleSortChange={handleSortChange} /> */}
				<Typography variant="h2">Список квартир</Typography>
				<div>
					{isLoading
						? [...new Array(3)].map((_, index) => (
								<SkeletonApartments key={index} />
						  ))
						: items.map((apartment) => (
								<ApartmentCard key={apartment.id} apartment={apartment} />
						  ))}
				</div>
				<PaginationApartment />
			</Container>
		</>
	);
}
