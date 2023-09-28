/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
import Header from '../components/Header';
import { generateTitle } from '../utils/generateTitle';

export default function Home({ searchValue, setSearchValue }) {
	const [apartments, setApartments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getApartments = async () => {
		axios
			.get('http://localhost:3000/api/apartments')
			.then((res) => res.data)
			.then((data) => setApartments(data))
			.catch((err) => console.log(err.message));
	};
	useEffect(() => {
		setIsLoading(true);
		getApartments();
		setIsLoading(false);
	}, []);

	const items = apartments.filter((obj) => {
		if (generateTitle(obj).includes(searchValue)) {
			console.log(generateTitle(obj));
			return true;
		}

		return false;
	});

	return (
		<>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<Container maxWidth="xl" sx={{ mt: '70px' }}>
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
			</Container>
		</>
	);
}
