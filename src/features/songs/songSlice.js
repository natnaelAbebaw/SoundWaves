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
      state.playingSong = action.payload;
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
} = songSlice.actions;
export default songSlice.reducer;
