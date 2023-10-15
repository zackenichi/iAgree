import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../resources/interfaces/User';

interface AuthState {
  currentUser: User | null;
}

const initialState: AuthState = {
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

const AuthenticationReducer = authSlice.reducer;

export { AuthenticationReducer };
