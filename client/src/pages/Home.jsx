/* eslint-disable react/prop-types */
import { Container, Typography } from '@mui/material';
import SkeletonApartments from '../components/ApartmentsBlock/Skeleton';
import ApartmentCard from '../components/ApartmentsBlock/ApartmentCard';
import Header from '../components/Header';
import { generateTitle } from '../utils/generateTitle';
import PaginationApartment from '../components/PaginationApartment';
import { useGetApartmentsQuery } from '../redux/ApartmentApi';

export default function Home({ searchValue, setSearchValue }) {
	const { data: apartments, isLoading } = useGetApartmentsQuery();
	if (!apartments || !Array.isArray(apartments)) {
		return (
			<>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<Container maxWidth="xl" sx={{ mt: '70px' }}>
					<Typography variant="h2">Список квартир</Typography>
					<div>
						{[...new Array(3)].map((_, index) => (
							<SkeletonApartments key={index} />
						))}
					</div>
					<PaginationApartment />
				</Container>
			</>
		);
	}

	const items = apartments.filter((obj) =>
		generateTitle(obj).includes(searchValue)
	);

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
				<PaginationApartment />
			</Container>
		</>
	);
}
