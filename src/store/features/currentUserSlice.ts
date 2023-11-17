import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/userTypes';

export interface CurrentUserState extends User {
  accessToken?: string;
  isLoggedIn?: boolean;
}

const initialState = {
  id: 0,
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  country: '',
  city: '',
  phone: '',
  firebaseId: '',
  photoURL: '',
  isCustomPhoto: false,
  instagramProfile: '',
  isAdmin: false,
  isArtist: false,
  isLoggedIn: false,
  hasActiveReservation: false,
} as CurrentUserState;

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const {
        id,
        firstName,
        lastName,
        displayName,
        email,
        country,
        city,
        phone,
        firebaseId,
        photoURL,
        isCustomPhoto,
        instagramProfile,
        isAdmin,
        isArtist,
        hasActiveReservation,
        status,
        festivals,
      } = action.payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.displayName = displayName;
      state.email = email;
      state.country = country;
      state.city = city;
      state.phone = phone;
      state.firebaseId = firebaseId;
      state.photoURL = photoURL;
      state.isCustomPhoto = isCustomPhoto;
      state.instagramProfile = instagramProfile;
      state.isAdmin = isAdmin;
      state.isArtist = isArtist;
      state.hasActiveReservation = hasActiveReservation;
      state.status = status;
      state.festivals = festivals;
    },
    setCurrentUserAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    },
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    updateUserProperty: (
      state,
      action: PayloadAction<{
        field: keyof CurrentUserState;
        value: string | boolean | number;
      }>,
    ) => {
      const { field, value } = action.payload;
      state[field] = value as never;
    },
    removeAccessToken: (state) => {
      state.accessToken = '';
      localStorage.removeItem('accessToken');
    },
    removeCurrentUser: () => initialState,
  },
});

export const {
  setCurrentUser,
  setCurrentUserAccessToken,
  setLoginStatus,
  updateUserProperty,
  removeAccessToken,
  removeCurrentUser,
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
