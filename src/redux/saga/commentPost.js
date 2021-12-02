import { call, put, takeEvery } from 'redux-saga/effects';
import { commentPostTypes, commentFetchTypes } from 'types/commentTypes';

import { postComment } from '../api';

function* addCommentHandler(action) {
  try {
    const comments = yield call(postComment, action.body);
    yield put({ type: commentPostTypes.POST_SUCCESS, payload: comments });
    yield put({ type: commentFetchTypes.FETCH });
  } catch (error) {
    yield put({ type: commentPostTypes.POST_FAILURE, error });
  }
}

function* watchAddCommentHandler() {
  yield takeEvery(commentPostTypes.POST, addCommentHandler);
}

export default watchAddCommentHandler;
