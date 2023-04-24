import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/functions';
import { ITeamSlide } from '../../utils/types';

export const fetchAboutTeamData = createAsyncThunk('aboutTeamData/fetchAboutTeamData', async () => {
  return fetchData('http://185.4.180.23:8000/api/v1/team-info/list');
});

const aboutTeamData = createSlice({
  name: 'aboutTeamData',
  initialState: {
    team: [] as ITeamSlide[],
    isNew: true,
    pending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutTeamData.pending, (state) => {
        state.pending = true;
        state.isNew = false;
      })
      .addCase(fetchAboutTeamData.fulfilled, (state, action) => {
        state.team = action.payload;
        state.isNew = false;
        state.pending = false;
      })
      .addCase(fetchAboutTeamData.rejected, () => {
        // TODO: add rejected state handler
      });
  },
});

const { reducer } = aboutTeamData;
export default reducer;
