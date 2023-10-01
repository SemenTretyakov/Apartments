import { createSlice } from '@reduxjs/toolkit';

const apartmentsSlice = createSlice({
	name: 'apartments',
	initialState: {
		data: [],
		total: 0,
		page: 1,
		limit: 8,
		pageCount: 1,
		search: '',
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
		setSearchValue: (state, action) => {
			state.search = action.payload;
		},
		setSortParam: (state, action) => {
			state.sort = action.payload.sort;
			state.sortParam = action.payload.sortParam;
		},
	},
});

export const { setApartmentsData, setSearchValue, setSortParam } =
	apartmentsSlice.actions;

export default apartmentsSlice.reducer;
