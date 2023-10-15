import { configureStore } from '@reduxjs/toolkit';

import {
  UiReducer,
  AgreementReducer,
  NotificationReducer,
  AuthenticationReducer,
} from './Reducers/';

export const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    agreement: AgreementReducer,
    ui: UiReducer,
    notification: NotificationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
