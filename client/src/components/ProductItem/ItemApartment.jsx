/* eslint-disable react/prop-types */
import {
	Typography,
	Stack,
	CardContent,
	Card,
	CardActions,
	Button,
	Container,
} from '@mui/material';
import { generateTitle } from '../../utils/generateTitle';
import MyBreadCrumbs from '../MyBreadcrumbs';
import { convertDateFormat } from '../../utils/convertDateFormat';
import { separateNumber } from '../../utils/separateNumber';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WeekendIcon from '@mui/icons-material/Weekend';
import StairsIcon from '@mui/icons-material/Stairs';
import { useParams } from 'react-router-dom';
import { useGetApartmentByIdQuery } from '../../redux/ApartmentApi';
import PlanFloor from '../PlanFloor';

export default function ItemApartment() {
	const { id } = useParams();
	const { data: apartment } = useGetApartmentByIdQuery(id);

	if (!apartment) {
		return <div>No apartments available.</div>;
	}

	return (
		<Container maxWidth="xl">
			<MyBreadCrumbs />
			<Stack
				sx={{
					display: 'grid',
					gridTemplateColumns: '3fr 2fr',
					columnGap: '30px',
					marginTop: '25px',
				}}
			>
				<Stack sx={{ mt: 3 }}>
					<Typography
						gutterBottom
						variant="h3"
						component="div"
						color="#2B67F6"
						sx={{ mb: 5 }}
					>
						{generateTitle(apartment)}
					</Typography>

					<img
						style={{ border: '1px solid #D4D4D4', borderRadius: '20px' }}
						width="90%"
						alt="flat"
						src={apartment.layout_image}
					/>
				</Stack>
				<Stack>
					<Card sx={{ p: '10px' }}>
						<CardContent>
							<Typography variant="body1" mt={3}>
								Информация о цене и наличии обновлена{' '}
								<b>{convertDateFormat(apartment.updatedAt)}</b>
							</Typography>
							<Typography variant="h4" mt={3}>
								<b style={{ color: '#2B67F6' }}>
									{separateNumber(apartment.price)} ₽
								</b>
							</Typography>
							<Typography variant="h5" color="text.secondary" mt={2}>
								Цена за метр:{' '}
								{separateNumber(
									Math.round(apartment.price / apartment.area_total)
								)}{' '}
								₽/м²
							</Typography>

							<Stack
								direction="row"
								mt="25px"
								columnGap="25px"
								justifyContent="center"
							>
								<Stack direction="column" columnGap={1} alignItems="center">
									<AspectRatioIcon />
									<Stack alignItems="center">
										<Typography>Общая площадь</Typography>
										<Typography variant="h6">
											{apartment.area_total} м²
										</Typography>
									</Stack>
								</Stack>
								<Stack direction="column" columnGap={1} alignItems="center">
									<KitchenIcon />
									<Stack alignItems="center">
										<Typography>Площадь кухни</Typography>
										<Typography variant="h6">
											{apartment.area_kitchen} м²
										</Typography>
									</Stack>
								</Stack>
								<Stack direction="column" columnGap={1} alignItems="center">
									<WeekendIcon />
									<Stack alignItems="center">
										<Typography>Жилая площадь</Typography>
										<Typography variant="h6">
											{apartment.area_live} м²
										</Typography>
									</Stack>
								</Stack>
								<Stack direction="column" columnGap={1} alignItems="center">
									<StairsIcon />
									<Stack alignItems="center">
										<Typography>Этаж</Typography>
										<Typography variant="h6">{apartment.floor} из 4</Typography>
									</Stack>
								</Stack>
							</Stack>
						</CardContent>
						<CardActions>
							<Button size="large" variant="contained" sx={{ width: '100%' }}>
								Забронировать
							</Button>
						</CardActions>
					</Card>
				</Stack>
				<Typography variant="h4" mt={6}>
					Выберите квартиру на плане этажа
				</Typography>
				<PlanFloor />
			</Stack>
		</Container>
	);
}
