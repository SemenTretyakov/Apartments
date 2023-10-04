import { createSlice } from '@reduxjs/toolkit';

const apartmentsSlice = createSlice({
	name: 'apartments',
	initialState: {
		data: [],
		total: 0,
		page: 1,
		limit: 8,
		pageCount: 1,
		searchTerm: '',
		sort: '_id',
		sortParam: 0,
	},
});

export const { setApartmentsData } = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
