import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
    // currentTrackId: null,
    // isShuffleModeOn: false,
  },
  reducers: {
    addTracks(state, action) {
      state.tracks.push({
        tracks: action.payload,
      });
    },
    // nextTrack() {},
    // prevTrack() {},
    // toggleShuffleMode(state) {
    //   state.isShuffleModeOn = !state.isShuffleModeOn;
    // },
  },
});

export const { addTracks } = playlistSlice.actions;
export default playlistSlice.reducer;
