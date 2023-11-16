import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../utils';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: (id: string) => `/users/${id}`,
    }),
    updateStands: builder.mutation({
      query: (data) => ({
        url: `/stands/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    getReservations: builder.query({
      query: () => '/reservations',
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateStandsMutation,
  useGetReservationsQuery,
} = apiSlice;
