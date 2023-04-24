import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IContactSlide } from '../../utils/types';
import { fetchData } from '../../utils/functions';

export const fetchContactsData = createAsyncThunk(
  'contactsPeopleData/fetchContactsPeopleData',
  async () => {
    return fetchData('http://185.4.180.23:8000/api/v1/contacts');
  }
);

const contactsPeopleData = createSlice({
  name: 'contactsPeopleData',
  initialState: {
    people: [] as IContactSlide[],
    pending: false,
    isNew: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsData.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchContactsData.fulfilled, (state, action) => {
        state.people = action.payload;
        state.pending = false;
        state.isNew = false;
      })
      .addCase(fetchContactsData.rejected, () => {
        // TODO: add rejected state handler
      });
  },
});

const { reducer } = contactsPeopleData;
export default reducer;
