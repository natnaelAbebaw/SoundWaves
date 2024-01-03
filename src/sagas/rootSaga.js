import { all } from "redux-saga/effects";
import {
  watchGetSongsSaga,
  watchAddSongSaga,
  watchEditSongSaga,
  watchDeleteSongSaga,
} from "./songSaga";

function* rootSaga() {
  yield all([
    watchGetSongsSaga(),
    watchAddSongSaga(),
    watchEditSongSaga(),
    watchDeleteSongSaga(),
  ]);
}

export default rootSaga;
