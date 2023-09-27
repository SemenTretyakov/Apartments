/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ApartmentCard({ apartment }) {
	return (
		<Card
			sx={{
				display: 'flex',
				columnGap: '40px',
				marginTop: '25px',
				boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.08)',
				borderRadius: '20px',
			}}
		>
			<CardMedia
				component="img"
				sx={{ width: '30%', p: '20px' }}
				height="380"
				alt="Chevrolet"
				image={apartment.layout_image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h4" component="div" color="#2B67F6">
					{apartment.rooms}-комн. кв., {apartment.area_total} м²,{' '}
					{apartment.floor}/4 этаж
				</Typography>
				<Typography variant="h5" color="text.secondary">
					Цена: {apartment.price} ₽
				</Typography>
			</CardContent>
		</Card>
	);
}
