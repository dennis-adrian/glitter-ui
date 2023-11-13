import { createSlice } from "@reduxjs/toolkit";
import { Festival } from "../../types/festivalTypes";

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
  availableArtists: [],
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
        availableArtists,
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
      state.availableArtists = availableArtists;
    },
    resetActiveFestival: () => initialState,
  },
});

export const { setActiveFestival, resetActiveFestival } = activeFestivalState.actions;

export default activeFestivalState.reducer;
