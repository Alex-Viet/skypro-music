import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/authSlice';

const TRACKS_TAG = { type: 'Tracks', id: 'LIST' };

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
    window.location.replace('/login');
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
    getFavoriteTracks: build.query({
      query: (access) => ({
        url: '/catalog/track/favorite/all/',
        headers: { Authorization: `Bearer ${access}` },
      }),
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({ type: TRACKS_TAG.type, id })),
          TRACKS_TAG,
        ]
        : [TRACKS_TAG]),
      transformResponse: (response) => {
        const transformedResponse = response.map((item) => ({
          ...item,
          stared_user: [JSON.parse(localStorage.getItem('user'))],
        }));

        return transformedResponse;
      },
    }),
    addFavoriteTracks: build.mutation({
      query: ({ id, access }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: { Authorization: `Bearer ${access}` },
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
    deleteFavoriteTracks: build.mutation({
      query: ({ id, access }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${access}` },
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
    getCategory: build.query({
      query: ({ id }) => ({
        url: `/catalog/selection/${id}/`,
      }),
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(({ id }) => ({ type: TRACKS_TAG.type, id }))
          : []),
        TRACKS_TAG,
      ],
    }),
  }),
});

export const {
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
  useGetCategoryQuery,
} = tracksApi;
