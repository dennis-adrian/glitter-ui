import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../utils';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User', 'Reservation', 'CurrentUser', 'ActiveFestival'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: (id: string) => `/users/${id}`,
      providesTags: ['CurrentUser'],
    }),
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
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
    updateReservation: builder.mutation({
      query: (data) => ({
        url: `/reservations/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Reservation', 'ActiveFestival'],
    }),
    deleteReservation: builder.mutation({
      query: (id: string | number) => ({
        url: `/reservations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservation', 'ActiveFestival'],
    }),
    getReservationsByFestival: builder.query({
      query: (id: string | number) => `/reservations?festival=${id}`,
      providesTags: ['Reservation'],
    }),
    getActiveFestival: builder.query({
      query: () => '/festivals?active=true',
      providesTags: ['ActiveFestival'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useUpdateStandsMutation,
  useGetReservationsQuery,
  useUpdateReservationMutation,
  useDeleteReservationMutation,
  useGetReservationsByFestivalQuery,
  useGetActiveFestivalQuery,
} = apiSlice;
