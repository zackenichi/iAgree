import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationInitialState {
  message: string;
  severity: AlertColor | undefined;
  open: boolean;
}

const initialState: NotificationInitialState = {
  message: '',
  severity: undefined,
  open: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (
      state,
      action: PayloadAction<NotificationInitialState>
    ) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = action.payload.open;
    },
    hideNotification: (state) => {
      state.open = false;
    },
  },
});

export const { setNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
