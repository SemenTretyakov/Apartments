/* eslint-disable react/prop-types */
import {
	Typography,
	Stack,
	CardContent,
	Card,
	CardActions,
	Button,
	Container,
	Link,
} from '@mui/material';
import { generateTitle } from '../utils/generateTitle';
import MyBreadCrumbs from './MyBreadcrumbs';
import { convertDateFormat } from '../utils/convertDateFormat';
import { separateNumber } from '../utils/separateNumber';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WeekendIcon from '@mui/icons-material/Weekend';
import StairsIcon from '@mui/icons-material/Stairs';
import { useParams } from 'react-router-dom';
import { useGetApartmentByIdQuery } from '../redux/ApartmentApi';
import oneFl from '../assets/images/oneFl.svg';
import twoFl from '../assets/images/twoFl.svg';
import threeFl from '../assets/images/threeFl.svg';
import fourFl from '../assets/images/fourFl.svg';
import fiveFl from '../assets/images/fiveFl.svg';
import sixFl from '../assets/images/sixFl.svg';
import hallway from '../assets/images/hallway.svg';
import styles from './ItemApartment.module.css';
import { useState } from 'react';

export default function ItemApartment() {
	const { id } = useParams();
	const { data: apartment } = useGetApartmentByIdQuery(id);
	const [selectedApartment, setSelectedApartment] = useState(
		apartment?.pos_on_floor // Use optional chaining to safely access pos_on_floor
	);

	if (!apartment) {
		return <div>No apartments available.</div>;
	}
	console.log(apartment.pos_on_floor);
	// Обработчик для выбора квартиры
	const handleApartmentClick = (pos_on_floor) => {
		setSelectedApartment(pos_on_floor);
	};
	let apartmentClass = '';

	switch (apartment.pos_on_floor) {
		case 1:
			apartmentClass = styles.oneFl;
			break;
		case 2:
			apartmentClass = styles.twoFl;
			break;
		case 3:
			apartmentClass = styles.threeFl;
			break;
		case 4:
			apartmentClass = styles.fourFl;
			break;
		case 5:
			apartmentClass = styles.fiveFl;
			break;
		case 6:
			apartmentClass = styles.sixFl;
			break;
		default:
			apartmentClass = '';
	}
	console.log('Apartment class:', apartmentClass);
	console.log('Selected apartment:', selectedApartment);
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
				<Stack
					display="flex"
					flexWrap="wrap"
					direction="row"
					position="relative"
					sx={{ transform: 'translateX(50%)', top: '60px' }}
				>
					<Link href={apartment}>
						<img
							alt="flat"
							className={`${apartmentClass} ${
								apartment?.pos_on_floor === selectedApartment
									? 'selectedApartment'
									: ''
							}`}
							src={oneFl}
							onClick={() => handleApartmentClick(1)}
							style={{
								position: 'absolute',
								width: '609px',
								height: '412px',
							}}
						/>
					</Link>

					<img
						alt="flat"
						src={twoFl}
						onClick={() => handleApartmentClick(2)}
						className={`${apartmentClass} ${
							apartment?.pos_on_floor === selectedApartment
								? 'selectedApartment'
								: ''
						}`}
						style={{
							position: 'absolute',
							width: '475px',
							height: '664px',
							left: '447px',
							top: '41px',
						}}
					/>
					<img
						alt="flat"
						src={threeFl}
						onClick={() => handleApartmentClick(3)}
						className={`${apartmentClass} ${
							apartment?.pos_on_floor === selectedApartment
								? 'selectedApartment'
								: ''
						}`}
						style={{
							position: 'absolute',
							width: '437px',
							height: '291px',
							top: '276px',
							left: '-3px',
						}}
					/>
					<img
						alt="flat"
						src={fourFl}
						onClick={() => handleApartmentClick(4)}
						className={`${apartmentClass} ${
							apartment?.pos_on_floor === selectedApartment
								? 'selectedApartment'
								: ''
						}`}
						style={{
							position: 'absolute',
							width: '435px',
							height: '291px',
							top: '546px',
							left: '-3px',
						}}
					/>
					<img
						alt="flat"
						src={hallway}
						style={{
							position: 'absolute',
							width: '179px',
							height: '501px',
							top: '460px',
							left: '439px',
						}}
					/>
					<img
						alt="flat"
						src={fiveFl}
						onClick={() => handleApartmentClick(5)}
						className={`${apartmentClass} ${
							apartment?.pos_on_floor === selectedApartment
								? 'selectedApartment'
								: ''
						}`}
						style={{
							position: 'absolute',
							width: '436px',
							height: '446px',
							top: '820px',
							left: '-5px',
						}}
					/>
					<img
						alt="flat"
						src={sixFl}
						onClick={() => handleApartmentClick(6)}
						className={`${apartmentClass} ${
							apartment?.pos_on_floor === selectedApartment
								? 'selectedApartment'
								: ''
						}`}
						style={{
							position: 'absolute',
							width: '353px',
							height: '314px',
							top: '952px',
							left: '390px',
						}}
					/>
				</Stack>
			</Stack>
		</Container>
	);
}
