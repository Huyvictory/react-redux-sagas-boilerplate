import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import videosReducer from "./videosReducer";
import channelReducer from "./channelReducer";

const appReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  form: formReducer,
  videos: videosReducer,
  channel: channelReducer,
});

const rootReducer = (state, action) => {
  // console.log("RESET_ALL_DATA action", action)
  if (action.type === "RESET_ALL_DATA") {
    state = {
      auth: state.auth,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
