/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, IconButton } from '@mui/material';

export default function Search({ searchTerm, handleSearchChange }) {
	return (
		<>
			<TextField
				placeholder="Search ..."
				type="search"
				value={searchTerm}
				onChange={handleSearchChange}
				sx={
					({
						color: '#333333',
					},
					{
						width: '400px',
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
		</>
	);
}
