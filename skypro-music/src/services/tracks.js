import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/authSlice';

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    api.dispatch(setAuth(null));
    window.location.navigate('/login');
  };

  const { auth } = api.getState();
  if (!auth.refresh) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions,
  );

  if (!refreshResult.data.access) {
    return forceLogout();
  }

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  return retryResult;
};

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getMainPlaylist: build.query({
      query: () => '/catalog/track/all/',
    }),
    getFavoriteTracks: build.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
      }),
    }),
  }),
});

export const { useGetMainPlaylistQuery, useGetFavoriteTracksQuery } = tracksApi;
