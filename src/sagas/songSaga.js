import {
  getSongsSuccess,
  getSongsFailure,
  getSongsStart,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  editSongStart,
  editSongSuccess,
  editSongFailure,
  deleteSongStart,
  deleteSongFailure,
  deleteSongSuccess,
} from "../features/songs/songSlice";
import { toast } from "react-hot-toast";

import { put, takeLatest, call } from "redux-saga/effects";
import {
  getAllSongs,
  addSong,
  updateSong,
  deleteSong,
} from "../services/songApis";

function songSaga(asyncFuction, successFunc, FailureFunc) {
  return function* (action) {
    try {
      const songs = yield call(function () {
        return asyncFuction(action.payload);
      });
      yield put(successFunc(songs));
      const message =
        action.type === addSongStart.type
          ? "Song added successfully"
          : action.type === editSongStart.type
          ? "Song edit successfully"
          : action.type === deleteSongStart.type
          ? "Song delete successfully"
          : "Songs loaded successfully";
      toast.success(message);
    } catch (error) {
      yield put(FailureFunc(error.message));
      const message =
        action.type === addSongStart.type
          ? "Song not added successfully"
          : action.type === editSongStart.type
          ? "Song not edit successfully"
          : action.type === deleteSongStart.type
          ? "Song not delete successfully"
          : "Songs not loaded successfully";

      toast.error(message);
    }
  };
}

export function* watchGetSongsSaga() {
  yield takeLatest(
    getSongsStart.type,
    songSaga(getAllSongs, getSongsSuccess, getSongsFailure)
  );
}

export function* watchAddSongSaga() {
  yield takeLatest(
    addSongStart.type,
    songSaga(addSong, addSongSuccess, addSongFailure)
  );
}

export function* watchEditSongSaga() {
  yield takeLatest(
    editSongStart.type,
    songSaga(updateSong, editSongSuccess, editSongFailure)
  );
}

export function* watchDeleteSongSaga() {
  yield takeLatest(
    deleteSongStart.type,
    songSaga(deleteSong, deleteSongSuccess, deleteSongFailure)
  );
}
