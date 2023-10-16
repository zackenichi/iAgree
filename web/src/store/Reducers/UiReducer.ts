import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiInitialState {
  isDrawerOpen: boolean;
  mode: string;
  showSignUp: boolean;
  loading: boolean;
}

const initialState: UiInitialState = {
  isDrawerOpen: false,
  mode: '',
  showSignUp: false,
  loading: false,
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setOpenDrawer, setMode, setShowSignUp, setLoading } =
  uiSlice.actions;
const UiReducer = uiSlice.reducer;

export { UiReducer };
