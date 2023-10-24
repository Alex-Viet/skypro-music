import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
    currentTrack: null,
    isPlaying: false,
    isShuffleModeOn: false,
    shuffledTracks: [],
    activePlaylist: [],
    isLoading: true,
  },
  reducers: {
    addTracks(state, action) {
      state.tracks = action.payload;
      state.isLoading = false;
      state.activePlaylist = [...state.tracks];
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
    playTrack(state, action) {
      state.isPlaying = action.payload;
    },
    stopTrack(state, action) {
      state.isPlaying = action.payload;
    },
    playNextTrack(state) {
      if (!state.currentTrack || state.activePlaylist.length === 0) return;

      const currentIndex = state.activePlaylist.findIndex(
        (track) => track.id === state.currentTrack.id,
      );

      const nextIndex = (currentIndex + 1) % state.activePlaylist.length;
      state.currentTrack = state.activePlaylist[nextIndex];
    },
    playPrevTrack(state) {
      if (!state.currentTrack || state.activePlaylist.length === 0) return;

      let currentIndex = state.activePlaylist.findIndex(
        (track) => track.id === state.currentTrack.id,
      );

      if (currentIndex === 0) {
        const firstTrackIndex = 0;
        state.currentTrack = state.activePlaylist[firstTrackIndex];
      } else {
        state.currentTrack = state.activePlaylist[(currentIndex -= 1)];
      }
    },
    toggleShuffleMode(state, action) {
      state.isShuffleModeOn = action.payload;
    },
    shuffleTracks(state, action) {
      state.shuffledTracks = action.payload;
      state.activePlaylist = [...state.shuffledTracks];
    },
    favoritePlaylist(state, action) {
      state.activePlaylist = action.payload;
    },
  },
});

export const {
  addTracks,
  setCurrentTrack,
  playTrack,
  stopTrack,
  playNextTrack,
  playPrevTrack,
  toggleShuffleMode,
  shuffleTracks,
  favoritePlaylist,
} = playlistSlice.actions;
export default playlistSlice.reducer;
