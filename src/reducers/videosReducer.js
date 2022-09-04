import {
  GET_LIST_VIDEOS,
  GET_LIST_VIDEOS_SUCCESS,
  GET_LIST_VIDEOS_FAILURE,
  GET_VIDEO,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
} from "actions/Auth/actionTypes";

const initialState = {
  getListVideoLoading: false,
  getVideoLoading: false,
  videos: [],
  videoById: { items: [{}] },
};

const getListVideos = (state, action) => ({
  ...state,
  getListVideoLoading: true,
});

const getListVideosSuccess = (state, action) => {
  console.log("check the data in reducer", action);
  return {
    ...state,
    getListVideoLoading: false,
    videos: action.payload.items,
  };
};

const getListVideosFailed = (state, action) => ({
  ...state,
  getListVideoLoading: false,
  videos: [],
});

const getVideo = (state, action) => ({
  ...state,
  getVideoLoading: true,
});

const getVideoSuccess = (state, action) => {
  console.log("check the data in reducer", action);
  return {
    ...state,
    getVideoLoading: false,
    videoById: action.payload.items[0],
  };
};

const getVideoFailed = (state, action) => ({
  ...state,
  getVideoLoading: false,
  videoById: { items: [{}] },
});

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_VIDEOS:
      return getListVideos(state, action);
    case GET_LIST_VIDEOS_SUCCESS:
      return getListVideosSuccess(state, action);
    case GET_LIST_VIDEOS_FAILURE:
      return getListVideosFailed(state, action);
    case GET_VIDEO:
      return getVideo(state, action);
    case GET_VIDEO_SUCCESS:
      return getVideoSuccess(state, action);
    case GET_VIDEO_FAILURE:
      return getVideoFailed(state, action);
    default:
      return state;
  }
};

export default videosReducer;
