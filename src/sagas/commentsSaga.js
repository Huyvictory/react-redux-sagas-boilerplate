import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_LIST_COMMENTS } from "actions/Auth/actionTypes";
import { getListCommentsSuccess, getListCommentsFailiure } from "actions/Auth";
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
        "Get list comments detail successfully",
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(getListCommentsSuccess(response.data));
    }
  } catch (error) {
    pushNotification("Get channel detail failed", "error", "TOP_CENTER", 1000);
    yield put(getListCommentsFailiure());
  }
}

function* watchGetRequest() {
  yield takeLatest(GET_LIST_COMMENTS, getJsonData);
}

export default function* sagas() {
  yield all([watchGetRequest()]);
}
