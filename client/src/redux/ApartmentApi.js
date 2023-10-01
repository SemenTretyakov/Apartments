import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apartmentsApi = createApi({
	reducerPath: 'apartmentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
	endpoints: (builder) => ({
		getApartments: builder.query({
			query: () => 'apartments',
		}),
		getApartmentById: builder.query({
			query: (id) => `apartments/${id}`,
		}),
	}),
});

export const { useGetApartmentsQuery, useGetApartmentByIdQuery } =
	apartmentsApi;
