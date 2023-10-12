import { configureStore } from '@reduxjs/toolkit';
import AgreementReducer from './AgreementReducer';
import UiReducer from './UiReducer';

export const store = configureStore({
  reducer: {
    auth: AgreementReducer,
    agreement: AgreementReducer,
    ui: UiReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
