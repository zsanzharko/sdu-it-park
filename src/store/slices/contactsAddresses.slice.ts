import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IContactsBlock } from '../../utils/types';
import { fetchData } from '../../utils/functions';

export const fetchAddressesData = createAsyncThunk(
  'contactsAddressesData/fetchContactsAddressesData',
  async () => {
    return fetchData('http://185.4.180.23:8000/api/v1/general/website/place');
  }
);

const initialState: IContactsBlock = {
  locationPlace:
    'Алматинская область, Kарасайский район. 040900, город Каскелен, ул. Абылай хана, 1/1',
  sectionPlace: 'block 5, number 69',
  phoneNumberLocation: '8777-777-77-77',
};

const contactsAddressesData = createSlice({
  name: 'contactsAddressesData',
  initialState: {
    addresses: initialState,
    isNew: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddressesData.pending, () => {
        // TODO: add pending state handler
      })
      .addCase(fetchAddressesData.fulfilled, (state, action) => {
        state.addresses = action.payload;
        state.isNew = false;
      })
      .addCase(fetchAddressesData.rejected, () => {
        // TODO: add rejected state handler
      });
  },
});

const { reducer } = contactsAddressesData;
export default reducer;
