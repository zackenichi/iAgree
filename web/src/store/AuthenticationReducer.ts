import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../resources/interfaces/User';

interface AuthState {
  loggedInUser: User | null;
}

const initialState: AuthState = {
  loggedInUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<User | null>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setLoggedInUser } = authSlice.actions;

export default authSlice.reducer;
