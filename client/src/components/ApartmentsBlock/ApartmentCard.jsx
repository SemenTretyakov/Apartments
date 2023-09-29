/* eslint-disable react/prop-types */
import { Typography, CardMedia, CardContent, Card } from '@mui/material';
import { generateTitle } from '../../utils/generateTitle';
import { useNavigate } from 'react-router-dom';
import { separateNumber } from '../../utils/separateNumber';

export default function ApartmentCard({ apartment }) {
	const navigate = useNavigate();
	const handleCardClick = () => {
		navigate(`/apartments/${apartment.id}`);
	};
	return (
		<Card
			onClick={handleCardClick}
			sx={{
				display: 'flex',
				columnGap: '40px',
				marginTop: '25px',
				boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.08)',
				borderRadius: '20px',
				transition: 'all 0.35s ease',
				'&:hover': {
					cursor: 'pointer',
					boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.25)',
				},
			}}
		>
			<CardMedia
				component="img"
				sx={{ width: '30%', p: '20px' }}
				height="380"
				alt="flat"
				image={apartment.layout_image}
			/>
			<CardContent sx={{ mt: 3 }}>
				<Typography gutterBottom variant="h4" component="div" color="#2B67F6">
					{generateTitle(apartment)}
				</Typography>
				<Typography variant="h5" mt={3}>
					Цена: <b>{separateNumber(apartment.price)}</b> ₽
				</Typography>
				<Typography variant="h6" color="text.secondary" mt={1}>
					{separateNumber(Math.round(apartment.price / apartment.area_total))}{' '}
					₽/м²
				</Typography>
			</CardContent>
		</Card>
	);
}
