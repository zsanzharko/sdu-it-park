import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/functions';
import { IActualPagePost } from '../../utils/types';

export const fetchActualPostsData = createAsyncThunk(
  'actualPostsData/fetchActualPostsData',
  async (link: string) => {
    return fetchData(link);
  }
);

const actualPostsData = createSlice({
  name: 'actualPostsData',
  initialState: {
    posts: [] as IActualPagePost[],
    initialPosts: [] as IActualPagePost[],
    isNew: true,
    pending: false,
  },
  reducers: {
    filterByTitle: (state, action) => {
      state.posts = state.initialPosts.filter((item) => item.title.indexOf(action.payload) > -1);
    },
    sortByDate: (state) => {
      state.posts = state.initialPosts.sort((a, b) => +a.createdDate - +b.createdDate);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActualPostsData.pending, (state) => {
        state.pending = true;
        state.isNew = false;
      })
      .addCase(fetchActualPostsData.fulfilled, (state, action) => {
        state.pending = false;
        state.posts = action.payload;
        state.initialPosts = action.payload;
      })
      .addCase(fetchActualPostsData.rejected, (state) => {
        state.isNew = true;
      });
  },
});

const { reducer, actions } = actualPostsData;
export const { filterByTitle, sortByDate } = actions;
export default reducer;
