import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './slices/playlistSlice';
import { tracksApi } from '../services/tracks';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    playlist: playlistReducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tracksApi.middleware),
});
