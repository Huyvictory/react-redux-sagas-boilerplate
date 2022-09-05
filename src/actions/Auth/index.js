import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  GET_LIST_VIDEOS,
  GET_LIST_VIDEOS_SUCCESS,
  GET_LIST_VIDEOS_FAILURE,
  GET_VIDEO,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  GET_CHANNEL_DETAIL,
  GET_CHANNEL_DETAIL_SUCCESS,
  GET_CHANNEL_DETAIL_FAILURE,
  GET_LIST_COMMENTS,
  GET_LIST_COMMENTS_SUCCESS,
  GET_LIST_COMMENTS_FAILURE,
} from "./actionTypes";

export const getList = () => ({
  type: GET_LIST,
});

export const getListSuccess = (data) => ({
  type: GET_LIST_SUCCESS,
  payload: data,
});

export const getListFailure = () => ({
  type: GET_LIST_FAILURE,
});

export const getListVideos = (payload) => ({
  type: GET_LIST_VIDEOS,
  payload: payload,
});

export const getListVideosSuccess = (data) => ({
  type: GET_LIST_VIDEOS_SUCCESS,
  payload: data,
});

export const getListVideosFailure = () => ({
  type: GET_LIST_VIDEOS_FAILURE,
});

export const getVideo = (payload) => ({
  type: GET_VIDEO,
  payload: payload,
});

export const getVideoSuccess = (data) => ({
  type: GET_VIDEO_SUCCESS,
  payload: data,
});

export const getVideoFailure = () => ({
  type: GET_VIDEO_FAILURE,
});

export const getChannelDetail = (payload) => ({
  type: GET_CHANNEL_DETAIL,
  payload: payload,
});

export const getChannelDetailSuccess = (data) => ({
  type: GET_CHANNEL_DETAIL_SUCCESS,
  payload: data,
});

export const getChanelDetailFailure = () => ({
  type: GET_CHANNEL_DETAIL_FAILURE,
});

export const getListComments = (payload) => ({
  type: GET_LIST_COMMENTS,
  payload: payload,
});

export const getListCommentsSuccess = (data) => ({
  type: GET_LIST_COMMENTS_SUCCESS,
  payload: data,
});

export const getListCommentsFailiure = () => ({
  type: GET_LIST_COMMENTS_FAILURE,
});
