import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiInitialState {
  isDrawerOpen: boolean;
  mode: string;
  showSignUp: boolean;
}

const initialState: UiInitialState = {
  isDrawerOpen: false,
  mode: '',
  showSignUp: false,
};
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    setShowSignUp: (state, action: PayloadAction<boolean>) => {
      state.showSignUp = action.payload;
    },
  },
});

export const { setOpenDrawer, setMode, setShowSignUp } = uiSlice.actions;
export default uiSlice.reducer;
