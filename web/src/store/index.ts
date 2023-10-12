import { configureStore } from '@reduxjs/toolkit';
import AgreementReducer from './AgreementReducer';
import UiReducer from './UiReducer';
import NotificationReducer from './NotificationReducer';

export const store = configureStore({
  reducer: {
    auth: AgreementReducer,
    agreement: AgreementReducer,
    ui: UiReducer,
    notification: NotificationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
