/* eslint-disable react/prop-types */
import { Typography, CardMedia, CardContent, Card } from '@mui/material';

export default function ApartmentCard({ apartment }) {
	return (
		<Card
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
				alt="Chevrolet"
				image={apartment.layout_image}
			/>
			<CardContent sx={{ mt: 3 }}>
				<Typography gutterBottom variant="h4" component="div" color="#2B67F6">
					{apartment.rooms}-комн. кв., {apartment.area_total} м²,{' '}
					{apartment.floor}/4 этаж
				</Typography>
				<Typography variant="h5" color="text.secondary" mt={3}>
					Цена: <b>{apartment.price}</b> ₽
				</Typography>
				<Typography variant="h6" color="text.secondary" mt={1}>
					{Math.round(apartment.price / apartment.area_total)} ₽/м²
				</Typography>
			</CardContent>
		</Card>
	);
}
