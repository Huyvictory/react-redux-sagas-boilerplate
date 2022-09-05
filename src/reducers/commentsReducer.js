import {
  GET_LIST_COMMENTS,
  GET_LIST_COMMENTS_SUCCESS,
  GET_LIST_COMMENTS_FAILURE,
} from "actions/Auth/actionTypes";

const initialState = {
  getListCommentsLoading: false,
  comments: [],
};

const getListComments = (state, action) => ({
  ...state,
  getListCommentsLoading: true,
});

const getListCommentsSuccess = (state, action) => {
  console.log("check the data in reducer", action);
  return {
    ...state,
    getListCommentsLoading: false,
    comments: action.payload.items,
  };
};

const getListCommentsFailed = (state, action) => ({
  ...state,
  getListCommentsLoading: false,
  comments: [],
});

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_COMMENTS:
      return getListComments(state, action);
    case GET_LIST_COMMENTS_SUCCESS:
      return getListCommentsSuccess(state, action);
    case GET_LIST_COMMENTS_FAILURE:
      return getListCommentsFailed(state, action);
    default:
      return state;
  }
};

export default commentsReducer;
