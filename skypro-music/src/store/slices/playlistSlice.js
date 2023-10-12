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
      state.tracks = action.payload;
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
    playNextTrack(state) {
      if (!state.currentTrack || state.tracks.length === 0) return;

      const currentIndex = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.id,
      );

      const nextIndex = (currentIndex + 1) % state.tracks.length;
      state.currentTrack = state.tracks[nextIndex];
    },
    // prevTrack() {},
    // toggleShuffleMode(state) {
    //   state.isShuffleModeOn = !state.isShuffleModeOn;
    // },
  },
});

export const { addTracks, setCurrentTrack, playNextTrack } = playlistSlice.actions;
export default playlistSlice.reducer;
