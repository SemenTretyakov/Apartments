/* eslint-disable react/prop-types */
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function SortApart({ sortParam, handleSortChange }) {
	return (
		<FormControl variant="standard" sx={{ minWidth: '280px', p: 0 }}>
			<InputLabel id="demo-simple-select-label">Сортировка по:</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				label="Sort"
				value={sortParam}
				onChange={handleSortChange}
				MenuProps={{
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'left',
					},
					transformOrigin: {
						vertical: 'top',
						horizontal: 'left',
					},
				}}
			>
				<MenuItem value={0}>По умолчанию</MenuItem>
				<MenuItem value={1}>Цена: по убыванию</MenuItem>
				<MenuItem value={2}>Цена: по возрастанию</MenuItem>
				<MenuItem value={3}>Площадь: по убыванию</MenuItem>
				<MenuItem value={4}>Площадь: по возрастанию</MenuItem>
			</Select>
		</FormControl>
	);
}
