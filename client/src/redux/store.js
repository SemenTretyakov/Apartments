import { configureStore } from '@reduxjs/toolkit';
import { apartmentsApi } from './ApartmentApi';

const store = configureStore({
	reducer: {
		[apartmentsApi.reducerPath]: apartmentsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apartmentsApi.middleware),
});

export default store;
