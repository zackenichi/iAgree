import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiInitialState {
  isDrawerOpen: boolean;
  mode: string;
}

const initialState: UiInitialState = {
  isDrawerOpen: false,
  mode: '',
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
  },
});

export const { setOpenDrawer, setMode } = uiSlice.actions;
export default uiSlice.reducer;
