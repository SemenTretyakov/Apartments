// /* eslint-disable react/prop-types */
// import { useGetApartmentsQuery } from '../store/api';
// import ApartmentCard from './ApartmentsBlock/ApartmentCard';
// import { Container, Typography } from '@mui/material';
// // import SkeletonApartments from './ApartmentsBlock/Skeleton';

// export default function ApartmentList() {
// 	const { data: apartments, error, isLoading } = useGetApartmentsQuery();
// 	console.log(apartments);

// 	if (isLoading) {
// 		return <div>Loading...</div>;
// 	}

// 	if (error) {
// 		return <div>Error: {error.message}</div>;
// 	}
// 	return (
// 		<Container maxWidth="xl" sx={{ mt: '70px' }}>
// 			<Typography variant="h2">Список квартир</Typography>
// 			<div>
// 				{apartments.map((apartment) => (
// 					<ApartmentCard key={apartment.id} apartment={apartment} />
// 				))}
// 			</div>
// 		</Container>
// 	);
// }
