import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Festival } from '../../types/festivalTypes';
import { StandModel } from '../../types/eventMapTypes';

export type ActiveFestivalState = Festival;

const initialState = {
  name: '',
  description: '',
  startDate: '',
  endDate: '',
  location: '',
  locationURL: '',
  logoURL: '',
  status: 'DRAFT',
  artists: [],
  stands: [],
} as ActiveFestivalState;

export const activeFestivalState = createSlice({
  name: 'activeFestival',
  initialState,
  reducers: {
    setActiveFestival: (state, action) => {
      const {
        id,
        name,
        description,
        startDate,
        endDate,
        location,
        locationURL,
        logoURL,
        status,
        artists,
        stands,
        reservations,
      } = action.payload;
      state.id = id;
      state.name = name;
      state.description = description;
      state.startDate = startDate;
      state.endDate = endDate;
      state.location = location;
      state.locationURL = locationURL;
      state.logoURL = logoURL;
      state.status = status;
      state.artists = artists;
      state.stands = stands;
      state.reservations = reservations;
    },
    resetActiveFestival: () => initialState,
    updateStand: (state, action: PayloadAction<StandModel>) => {
      const { id } = action.payload;
      const standIndex = state.stands!.findIndex((stand) => stand.id === id);
      state.stands![standIndex] = action.payload;
    },
  },
});

export const { setActiveFestival, resetActiveFestival, updateStand } =
  activeFestivalState.actions;

export default activeFestivalState.reducer;
