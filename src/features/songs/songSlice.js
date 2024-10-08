import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  status: "idle",
  error: null,
  currentSong: null,
  formStatus: "idle",
  songForm: "",
  songDialog: "",
  playingSong: null,
  playingStatus: "idle",
  waveSurf: null,
  wavesurferRef: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsStart: (state) => {
      state.status = "loading";
    },
    getSongsSuccess: (state, action) => {
      state.status = "success";
      state.songs = action.payload;
    },
    getSongsFailure: (state, action) => {
      state.status = "failure";
      state.error = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    addSongStart: (state) => {
      state.formStatus = "loading";
    },
    addSongSuccess: (state, action) => {
      state.formStatus = "success";
      state.songForm = "";
      state.songs.unshift(action.payload);
      state.currentSong = action.payload;
    },
    addSongFailure: (state, action) => {
      state.formStatus = "failure";
      state.error = action.payload;
    },
    editSongStart: (state) => {
      state.formStatus = "loading";
    },
    editSongSuccess: (state, action) => {
      state.formStatus = "success";
      state.songs = state.songs.map((song) =>
        song.id === action.payload.id ? action.payload : song
      );
      state.songForm = "";
      state.currentSong = action.payload;

      if (state.playingSong?.id === action.payload.id) {
        state.playingSong = action.payload;
      }
    },
    editSongFailure: (state, action) => {
      state.formStatus = "failure";
      state.error = action.payload;
    },

    deleteSongStart: (state) => {
      state.formStatus = "loading";
    },

    deleteSongSuccess: (state, action) => {
      state.formStatus = "success";
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.songDialog = "";
      state.currentSong = null;
      if (state.playingSong?.id === action.payload) {
        state.playingSong = null;
      }
    },
    deleteSongFailure: (state, action) => {
      state.formStatus = "failure";
      state.error = action.payload;
    },
    setSongForm: (state, action) => {
      state.songForm = action.payload;
    },
    setSongDialog: (state, action) => {
      state.songDialog = action.payload;
    },
    setPlayingSong: (state, action) => {
      state.playingStatus = "playing";
      state.playingSong = action.payload;
    },
    playSong(state) {
      state.playingStatus = "playing";
    },
    pauseSong(state) {
      state.playingStatus = "paused";
    },
    getWaveSurf(state, action) {
      state.waveSurf = action.payload;
    },
    getWaveSurfRef(state, action) {
      state.wavesurferRef = action.payload;
    },
    forwardSong(state) {
      state.waveSurf.seekTo(state.waveSurf.getCurrentTime() + 5);
    },
    backwardSong(state) {
      state.waveSurf.seekTo(state.waveSurf.getCurrentTime() - 5);
    },
  },
});

export const {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  setCurrentSong,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  editSongStart,
  editSongSuccess,
  editSongFailure,
  setSongForm,
  setSongDialog,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
  setPlayingSong,
  playSong,
  pauseSong,
  forwardSong,
  backwardSong,
  getWaveSurf,
} = songSlice.actions;
export default songSlice.reducer;
