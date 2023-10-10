import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Agreement } from '../resources/interfaces/Agreement';

export interface AgreementInitialState {
  list: Agreement[];
  //   draft: Agreement;
}

const initialState: AgreementInitialState = {
  list: [],
  //   draft: {
  //     id: 'draft',
  //     name: '',
  //     description: '',
  //     status: '',
  //     approvals: [],
  //   },
};

export const agreementsSlice = createSlice({
  name: 'agreement',
  initialState,
  reducers: {
    createAgreement: (state, action: PayloadAction<Agreement>) => {
      state.list.push(action.payload);
    },
  },
});

export const { createAgreement } = agreementsSlice.actions;
export default agreementsSlice.reducer;
