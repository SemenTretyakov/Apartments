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
		filterApartments: builder.query({
			query: ({ priceSort, areaSort }) =>
				`apartments?priceSort=${priceSort}&areaSort=${areaSort}`,
		}),
		searchApartments: builder.query({
			query: (searchTerm) => `search?searchTerm=${searchTerm}`,
		}),
	}),
});

export const {
	useGetApartmentsQuery,
	useGetApartmentByIdQuery,
	useFilterApartmentsQuery,
	useSearchApartmentsQuery,
} = apartmentsApi;
