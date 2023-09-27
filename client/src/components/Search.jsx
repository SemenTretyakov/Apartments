import SearchIcon from '@mui/icons-material/Search';
import {
	TextField,
	InputAdornment,
	IconButton,
	createTheme,
	useMediaQuery,
} from '@mui/material';

export default function Search() {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 720,
				lg: 1200,
				xl: 1536,
			},
		},
	});
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<TextField
			placeholder="Search ..."
			type="search"
			sx={
				({
					color: '#333333',
				},
				{
					width: isMatch ? '225px' : '320px',
					maxWidth: '320px',
					borderRadius: '10px',
					backgroundColor: '#F4F7FF',
					border: 'none',
					'& fieldset': { border: 'none' },
				})
			}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<IconButton>
							<SearchIcon sx={{ fill: '#D3D2D2' }} />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}
