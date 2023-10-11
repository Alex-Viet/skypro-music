import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
    currentTrack: null,
    currentTrackId: 0,
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
      console.log(action.payload.id);
    },
    playNextTrack(state, action) {
      // if (state.currentTrack.id < state.tracks.length - 1) {
      state.currentTrackId = action.payload + 1;
      console.log(state.currentTrackId);
      // }
    },
    // prevTrack() {},
    // toggleShuffleMode(state) {
    //   state.isShuffleModeOn = !state.isShuffleModeOn;
    // },
  },
});

export const { addTracks, setCurrentTrack, playNextTrack } = playlistSlice.actions;
export default playlistSlice.reducer;
