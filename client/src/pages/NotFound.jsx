/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Box, Button, ButtonGroup, Typography, Stack } from '@mui/material';

export default function NotFound({ error }) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	const goBack = () => {
		window.history.back();
	};

	return (
		<Stack sx={{ backgroundColor: '#1D1E1E' }}>
			<Box
				sx={{
					margin: '0 auto',
					alignItems: 'center',
					maxWidth: '880px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					height: '100vh',
				}}
			>
				<Typography
					variant="h1"
					color="blue"
					fontFamily="Helvetica"
					fontSize="260px"
				>
					404
				</Typography>
				<Typography
					margin="25px 0"
					color="white"
					fontSize="42px"
					lineHeight="125%"
					fontFamily="Helvetica"
				>
					Страница не найдена
				</Typography>
				<Typography
					textAlign="center"
					color="rgba(255, 255, 255, 0.8)"
					fontSize="24px"
					lineHeight="125%"
					fontFamily="Helvetica"
				>
					Страница, которую вы ищете, возможно, была удалена или временно
					недоступна, либо ее название изменено.
				</Typography>
				<ButtonGroup sx={{ columnGap: '15px', marginTop: '40px' }}>
					<Button
						onClick={goBack}
						sx={{
							padding: '20px 35px',
							backgroundColor: 'blue',
							color: '#fff',
							fontSize: '1rem',
							borderRadius: 'none',
							maxHeight: '60px',
						}}
					>
						Назад
					</Button>
					<Button
						href="/"
						sx={{
							padding: '20px 35px',
							backgroundColor: '#fff',
							color: ' #959595',
							fontSize: '1rem',
							borderRadius: 'none',
							maxHeight: '60px',
						}}
					>
						Домой
					</Button>
				</ButtonGroup>
			</Box>
		</Stack>
	);
}
