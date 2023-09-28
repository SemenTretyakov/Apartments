import { Skeleton } from '@mui/material';

export default function SkeletonApartments() {
	return (
		<>
			<Skeleton
				variant="rectangular"
				width={1488}
				height={380}
				sx={{ mt: '25px', borderRadius: '20px' }}
			/>
		</>
	);
}
