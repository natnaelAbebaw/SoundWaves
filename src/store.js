import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import songReducer from "./features/songs/songSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { songs: songReducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
