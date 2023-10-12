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
    playPrevTrack(state) {
      if (!state.currentTrack || state.tracks.length === 0) return;

      let currentIndex = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.id,
      );

      if (currentIndex === 0) {
        const firstTrackIndex = 0;
        state.currentTrack = state.tracks[firstTrackIndex];
      } else {
        state.currentTrack = state.tracks[(currentIndex -= 1)];
      }
    },
    // toggleShuffleMode(state) {
    //   state.isShuffleModeOn = !state.isShuffleModeOn;
    // },
  },
});

export const { addTracks, setCurrentTrack, playNextTrack, playPrevTrack } = playlistSlice.actions;
export default playlistSlice.reducer;
