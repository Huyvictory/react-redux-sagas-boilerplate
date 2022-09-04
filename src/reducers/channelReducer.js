import {
  GET_CHANNEL_DETAIL,
  GET_CHANNEL_DETAIL_SUCCESS,
  GET_CHANNEL_DETAIL_FAILURE,
} from "actions/Auth/actionTypes";

const initialState = {
  getChannelDetailLoading: false,
  channel: {},
};

const getChannelDetails = (state, action) => ({
  ...state,
  getChannelDetailLoading: true,
});

const getChannelDetailsSuccess = (state, action) => {
  console.log("check the data in reducer", action);
  return {
    ...state,
    getChannelDetailLoading: false,
    channel: action.payload,
  };
};

const getChannelDetailsFailed = (state, action) => ({
  ...state,
  getChannelDetailLoading: false,
  channel: {},
});

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNEL_DETAIL:
      return getChannelDetails(state, action);
    case GET_CHANNEL_DETAIL_SUCCESS:
      return getChannelDetailsSuccess(state, action);
    case GET_CHANNEL_DETAIL_FAILURE:
      return getChannelDetailsFailed(state, action);
    default:
      return state;
  }
};

export default channelReducer;
