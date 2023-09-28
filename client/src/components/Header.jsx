/* eslint-disable react/prop-types */
import {
	AppBar,
	Toolbar,
	Container,
	Link,
	Typography,
	Stack,
} from '@mui/material';
import Search from './Search';
import logoSvg from '/logo.svg';

export default function Header({ searchValue, setSearchValue }) {
	return (
		<AppBar
			position="static"
			sx={{
				background: '#fff',
				height: '120px',
			}}
		>
			<Toolbar
				disableGutters={true}
				sx={{
					boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.08)',
					p: '20px 30px',
				}}
			>
				<Container maxWidth="xl">
					<Stack
						direction="row"
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Link href="/" display="flex" alignItems="center" columnGap={2}>
							<img src={logoSvg} alt="logo" />
							<Typography color="#333">Esoft</Typography>
						</Link>
						<Search searchValue={searchValue} setSearchValue={setSearchValue} />
					</Stack>
				</Container>
			</Toolbar>
		</AppBar>
	);
}
