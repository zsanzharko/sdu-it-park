import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/functions';
import { IActualPagePost } from '../../utils/types';

export const fetchActualPostsData = createAsyncThunk(
  'actualPostsData/fetchActualPostsData',
  async () => {
    return fetchData('http://185.4.180.23:8000/api/v1/posts/list');
  }
);

const actualPostsData = createSlice({
  name: 'actualPostsData',
  initialState: {
    posts: [] as IActualPagePost[],
    isNew: true,
    pending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActualPostsData.pending, (state) => {
        state.pending = true;
        state.isNew = false;
      })
      .addCase(fetchActualPostsData.fulfilled, (state, action) => {
        state.pending = false;
        state.posts = action.payload;
        state.isNew = false;
      })
      .addCase(fetchActualPostsData.rejected, () => {
        // TODO: add rejected state handler
      });
  },
});

const { reducer } = actualPostsData;
export default reducer;
