import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Agreement } from '../../resources/interfaces/Agreement';

export interface AgreementInitialState {
  list: Agreement[];
  preview: Agreement;
}

const initialState: AgreementInitialState = {
  list: [],
  preview: {
    id: 'draft',
    name: '',
    description: '',
    status: '',
    approvals: [],
  },
};

export const agreementsSlice = createSlice({
  name: 'agreement',
  initialState,
  reducers: {
    createAgreement: (state, action: PayloadAction<Agreement>) => {
      state.list.push(action.payload);
    },
    setPreview: (state, action: PayloadAction<Agreement>) => {
      state.preview = action.payload;
    },
    setAgreementList: (state, action: PayloadAction<Agreement[]>) => {
      state.list = action.payload;
    },
  },
});

export const { createAgreement, setPreview, setAgreementList } =
  agreementsSlice.actions;
const AgreementReducer = agreementsSlice.reducer;

export { AgreementReducer };
