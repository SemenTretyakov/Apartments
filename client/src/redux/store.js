import { configureStore } from '@reduxjs/toolkit';
import { apartmentsApi } from './ApartmentApi';
import apartmentsReducer from './ApartmentSlice';

const store = configureStore({
	reducer: {
		apartments: apartmentsReducer,
		[apartmentsApi.reducerPath]: apartmentsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apartmentsApi.middleware),
});

export default store;
