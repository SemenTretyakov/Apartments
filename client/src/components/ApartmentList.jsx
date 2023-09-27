/* eslint-disable react/prop-types */
import ApartmentCard from './ApartmentCard';
import { Container, Typography } from '@mui/material';

export default function ApartmentList({ apartments }) {
	return (
		<Container maxWidth="xl" sx={{ mt: '70px' }}>
			<Typography variant="h2">Список квартир</Typography>
			<div className="apartment-list">
				{apartments.map((apartment) => (
					<ApartmentCard key={apartment.id} apartment={apartment} />
				))}
			</div>
		</Container>
	);
}
