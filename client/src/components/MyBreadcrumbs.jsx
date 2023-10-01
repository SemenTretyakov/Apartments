import { Typography, Breadcrumbs, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetApartmentByIdQuery } from '../redux/ApartmentApi';
import { generateTitle } from '../utils/generateTitle';

function handleClick(event) {
	event.preventDefault();
}

export default function MyBreadCrumbs() {
	const { id } = useParams();
	const { data: apartment } = useGetApartmentByIdQuery(id);
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb" sx={{ mt: '30px' }}>
				<Link
					component={RouterLink}
					to="/"
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					color="inherit"
					href="/"
				>
					<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Домой
				</Link>

				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					{generateTitle(apartment)}
				</Typography>
			</Breadcrumbs>
		</div>
	);
}
