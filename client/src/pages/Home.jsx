import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
import Header from '../components/Header';

export default function Home() {
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
		getApartments();
		setIsLoading(false);
	}, []);
	return (
		<>
			<Header />
			<Container maxWidth="xl" sx={{ mt: '70px' }}>
				<Typography variant="h2">Список квартир</Typography>
				<div>
					{isLoading
						? [...new Array(3)].map((_, index) => (
								<SkeletonApartments key={index} />
						))
						: apartments.map((apartment) => (
								<ApartmentCard key={apartment.id} apartment={apartment} />
						))}
				</div>
			</Container>
		</>
	);
}
