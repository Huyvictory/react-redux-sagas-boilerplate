import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import videosSaga from "./videosSaga";
import channelSaga from "./channelSaga";

export default function* rootSaga() {
  yield all([authSagas(), videosSaga(), channelSaga()]);
}
