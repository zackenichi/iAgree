import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiInitialState {
  isDrawerOpen: boolean;
}

const initialState: UiInitialState = {
  isDrawerOpen: false,
};
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { setOpenDrawer } = uiSlice.actions;
export default uiSlice.reducer;
