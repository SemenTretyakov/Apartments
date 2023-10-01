import oneFl from '../assets/images/oneFl.svg';
import twoFl from '../assets/images/twoFl.svg';
import threeFl from '../assets/images/threeFl.svg';
import fourFl from '../assets/images/fourFl.svg';
import fiveFl from '../assets/images/fiveFl.svg';
import sixFl from '../assets/images/sixFl.svg';
import hallway from '../assets/images/hallway.svg';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './ItemApartment.module.css';
import { Link, Stack } from '@mui/material';
import { useGetApartmentByIdQuery } from '../redux/ApartmentApi';
import { useParams } from 'react-router-dom';

export default function PlanFloor() {
	const { id } = useParams();
	const { data: apartment } = useGetApartmentByIdQuery(id);
	const [selectedApartment, setSelectedApartment] = useState(
		apartment?.pos_on_floor
	);

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
	return (
		<Stack
			display="flex"
			flexWrap="wrap"
			direction="row"
			position="relative"
			sx={{ transform: 'translate(50%)', top: '60px' }}
		>
			<Link to={'/apartments/119'} component={RouterLink}>
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
			<Link to={'/apartments/120'} component={RouterLink}>
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
			</Link>
			<Link to={'/apartments/124'} component={RouterLink}>
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
			</Link>
			<Link to={'/apartments/122'} component={RouterLink}>
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
			</Link>
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
			<Link to={'/apartments/124'} component={RouterLink}>
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
			</Link>
			<Link to={'/apartments/124'} component={RouterLink}>
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
			</Link>
		</Stack>
	);
}
