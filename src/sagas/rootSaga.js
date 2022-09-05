import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import videosSaga from "./videosSaga";
import channelSaga from "./channelSaga";
import commentsSaga from "./commentsSaga";

export default function* rootSaga() {
  yield all([authSagas(), videosSaga(), channelSaga(), commentsSaga()]);
}
