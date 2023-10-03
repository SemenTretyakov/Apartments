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
	reducers: {
		setApartmentsData: (state, action) => {
			state.data = action.payload.apartments;
			state.total = action.payload.total;
			state.page = action.payload.page;
			state.limit = action.payload.limit;
			state.pageCount = action.payload.pageCount;
		},
	},
});

export const { setApartmentsData } = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
