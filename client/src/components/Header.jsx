import { AppBar, Toolbar, Container, Link } from '@mui/material';
import Search from './Search';

export default function Header() {
	return (
		<AppBar position="static" sx={{ p: 0, m: 0 }}>
			<Toolbar disableGutters={true}>
				<Container
					maxWidth="xl"
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Link href="/">
						<img src="logoSVG" alt="logo" />
					</Link>
					<Search />
				</Container>
			</Toolbar>
		</AppBar>
	);
}
