import { Container, Typography } from '@mui/material';
import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
import Header from '../components/Header';
import PaginationApartment from '../components/PaginationApartment';
import {
	useFilterApartmentsQuery,
	useSearchApartmentsQuery,
} from '../redux/ApartmentApi';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function Home() {
	const [sortParam, setSortParam] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortedApartments, setSortedApartments] = useState([]);

	const handleSortChange = (event) => {
		const newValue = event.target.value;
		setSortParam(newValue);
	};

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const { data: searchResults } = useSearchApartmentsQuery(searchTerm);

	const { data: apartments, isLoading } = useFilterApartmentsQuery({
		priceSort: sortParam === 1 ? 'desc' : 'asc',
		areaSort: sortParam === 3 ? 'desc' : 'asc',
	});
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

	return (
		<>
			<Header searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
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
						<MenuItem value={1}>Цена: по возрастанию</MenuItem>
						<MenuItem value={2}>Цена: по убыванию</MenuItem>
						<MenuItem value={3}>Площадь: по возрастанию</MenuItem>
						<MenuItem value={4}>Площадь: по убыванию</MenuItem>
					</Select>
				</FormControl>

				<Typography variant="h2">Список квартир</Typography>
				<div>
					{isLoading
						? [...new Array(3)].map((_, index) => (
								<SkeletonApartments key={index} />
						  ))
						: searchResults.map((apartment) => (
								<ApartmentCard key={apartment.id} apartment={apartment} />
						  ))}
				</div>
				<PaginationApartment />
			</Container>
		</>
	);
}
