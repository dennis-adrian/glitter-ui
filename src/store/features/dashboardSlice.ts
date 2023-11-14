import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/userTypes';

export interface DashboardState {
  selectedUser: User;
}

const initialState = { selectedUser: {} as User };

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },
    updateSelectedUserProperty: (
      state,
      action: PayloadAction<{
        field: keyof User;
        value: any; // eslint-disable-line
      }>,
    ) => {
      const { field, value } = action.payload;
      state.selectedUser[field] = value as never;
    },
  },
});

export const { setSelectedUser, updateSelectedUserProperty } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
