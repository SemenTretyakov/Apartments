import { Container, Typography } from '@mui/material';
import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
import Header from '../components/Header';
import PaginationApartment from '../components/PaginationApartment';
import { useFilterApartmentsQuery } from '../redux/ApartmentApi';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../redux/ApartmentSlice';

export default function Home() {
	const [sortParam, setSortParam] = useState(0);
	const { data: apartments, isLoading } = useFilterApartmentsQuery({
		priceSort: sortParam === 1 ? 'desc' : 'asc',
		areaSort: sortParam === 3 ? 'desc' : 'asc',
	});
	const [sortedApartments, setSortedApartments] = useState([]);
	const dispatch = useDispatch();
	const searchValue = useSelector((state) => state.searchValue);

	const sortApartments = (apartments, sortParam) => {
		switch (sortParam) {
			case 1:
				return [...apartments].sort((a, b) => a.price - b.price);
			case 2:
				return [...apartments].sort((a, b) => b.price - a.price);
			case 3:
				return [...apartments].sort((a, b) => a.area_total - b.area_total);
			case 4:
				return [...apartments].sort((a, b) => b.area_total - a.area_total);
			default:
				return apartments;
		}
	};

	useEffect(() => {
		if (apartments) {
			const sorted = sortApartments(apartments, sortParam);
			setSortedApartments(sorted);
		}
	}, [apartments, sortParam]);

	const handleSortChange = (event) => {
		const newValue = event.target.value;
		setSortParam(newValue);
	};

	return (
		<>
			<Header
				searchValue={searchValue}
				setSearchValue={(value) => dispatch(setSearchValue(value))}
			/>
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

				<Typography variant="h2">Список квартир</Typography>
				<div>
					{isLoading
						? [...new Array(3)].map((_, index) => (
								<SkeletonApartments key={index} />
						))
						: sortedApartments.map((apartment) => (
								<ApartmentCard key={apartment.id} apartment={apartment} />
						))}
				</div>
				<PaginationApartment />
			</Container>
		</>
	);
}
