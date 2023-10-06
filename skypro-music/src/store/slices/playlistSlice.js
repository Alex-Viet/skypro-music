import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
    currentTrack: null,
    // isShuffleModeOn: false,
  },
  reducers: {
    addTracks(state, action) {
      state.tracks.push({
        tracks: action.payload,
      });
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
    // nextTrack() {},
    // prevTrack() {},
    // toggleShuffleMode(state) {
    //   state.isShuffleModeOn = !state.isShuffleModeOn;
    // },
  },
});

export const { addTracks, setCurrentTrack } = playlistSlice.actions;
export default playlistSlice.reducer;
