/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/ApartmentSlice';

export default function Search() {
	const searchValue = useSelector((state) => state.searchValue);
	const dispatch = useDispatch();
	return (
		<TextField
			placeholder="Search ..."
			type="search"
			value={searchValue}
			onChange={(e) => dispatch(setSearchValue(e.target.value))}
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
	);
}
