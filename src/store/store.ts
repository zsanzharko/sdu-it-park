import { configureStore } from '@reduxjs/toolkit';
import contactsPeopleData from './slices/contactsPeople.slice';
import contactsAddressesData from './slices/contactsAddresses.slice';
import aboutTeamData from './slices/aboutTeam.slice';
import actualPostsData from './slices/actualPosts.slice';

const store = configureStore({
  reducer: { contactsPeopleData, contactsAddressesData, aboutTeamData, actualPostsData },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
