import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/functions';
import { IPartnersSlider } from '../../utils/types';

export const fetchPartnersList = createAsyncThunk('partnersList/fetchPartnersList', async () => {
  return fetchData('/api/v1/sponsors');
});

const partnersList = createSlice({
  name: 'partnersList',
  initialState: {
    partners: [] as IPartnersSlider[],
    isNew: true,
    pending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartnersList.pending, (state) => {
        state.pending = true;
        state.isNew = false;
      })
      .addCase(fetchPartnersList.fulfilled, (state, action) => {
        state.pending = false;
        state.partners = action.payload;
      })
      .addCase(fetchPartnersList.rejected, (state) => {
        state.isNew = true;
      });
  },
});

const { reducer } = partnersList;
export default reducer;
