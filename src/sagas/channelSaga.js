import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_CHANNEL_DETAIL } from "actions/Auth/actionTypes";
import { getChannelDetailSuccess, getChanelDetailFailure } from "actions/Auth";
import { getRequest } from "./request";
import { pushNotification } from "utils/notifications";
// import URls from 'constants/urls';

function* getJsonData(action) {
  console.log(action);
  try {
    const response = yield call(getRequest, action.payload);
    console.log(response);
    if (response.data) {
      pushNotification(
        "Get channel detail successfully",
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(getChannelDetailSuccess(response.data));
    }
  } catch (error) {
    pushNotification("Get channel detail failed", "error", "TOP_CENTER", 1000);
    yield put(getChanelDetailFailure());
  }
}

function* watchGetRequest() {
  yield takeLatest(GET_CHANNEL_DETAIL, getJsonData);
}

export default function* sagas() {
  yield all([watchGetRequest()]);
}
