import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_LIST_VIDEOS, GET_VIDEO } from "actions/Auth/actionTypes";
import {
  getListVideosSuccess,
  getListVideosFailure,
  getVideoSuccess,
  getVideoFailure,
} from "actions/Auth";
import { getRequest } from "./request";
import { pushNotification } from "utils/notifications";
// import URls from 'constants/urls';

function* getJsonDataListVideos(action) {
  console.log(action);
  try {
    const response = yield call(getRequest, action.payload);
    if (response.data) {
      pushNotification(
        "Get videos successfully",
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(getListVideosSuccess(response.data));
    }
  } catch (error) {
    pushNotification("Get videos failed", "error", "TOP_CENTER", 1000);
    yield put(getListVideosFailure());
  }
}

function* getDataVideo(action) {
  console.log(action);
  try {
    const response = yield call(getRequest, action.payload);
    if (response.data) {
      pushNotification("Get video successfully", "success", "TOP_CENTER", 1000);
      yield put(getVideoSuccess(response.data));
    }
  } catch (error) {
    pushNotification("Get video failed", "error", "TOP_CENTER", 1000);
    yield put(getVideoFailure());
  }
}

function* watchGetRequestListVideos() {
  yield takeLatest(GET_LIST_VIDEOS, getJsonDataListVideos);
}

function* watchGetRequestVideo() {
  yield takeLatest(GET_VIDEO, getDataVideo);
}

export default function* sagas() {
  yield all([watchGetRequestListVideos(), watchGetRequestVideo()]);
}
