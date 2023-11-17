import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../utils';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User', 'Reservation'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: (id: string) => `/users/${id}`,
      providesTags: ['User'],
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
      providesTags: ['Reservation'],
    }),
    deleteReservation: builder.mutation({
      query: (id: string | number) => ({
        url: `/reservations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservation'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateStandsMutation,
  useGetReservationsQuery,
  useDeleteReservationMutation,
} = apiSlice;
