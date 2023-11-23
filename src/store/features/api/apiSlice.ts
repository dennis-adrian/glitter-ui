import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../utils';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User', 'Reservations', 'CurrentUser', 'ActiveFestival'],
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
    getReservations: builder.query({
      query: () => '/reservations',
      providesTags: ['Reservations'],
    }),
    createReservation: builder.mutation({
      query: (data) => ({
        url: '/reservations',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reservations', 'ActiveFestival', 'CurrentUser'],
    }),
    updateReservation: builder.mutation({
      query: (data) => ({
        url: `/reservations/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Reservations', 'ActiveFestival'],
    }),
    deleteReservation: builder.mutation({
      query: (id: string | number) => ({
        url: `/reservations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservations', 'ActiveFestival'],
    }),
    getReservationsByFestival: builder.query({
      query: (id: string | number) => `/reservations?festival=${id}`,
      providesTags: ['Reservations'],
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
  useCreateReservationMutation,
  useGetReservationsQuery,
  useUpdateReservationMutation,
  useDeleteReservationMutation,
  useGetReservationsByFestivalQuery,
  useGetActiveFestivalQuery,
} = apiSlice;
