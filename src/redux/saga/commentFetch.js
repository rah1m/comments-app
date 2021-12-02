import { call, put, takeEvery } from 'redux-saga/effects';

import { commentFetchTypes } from 'types/commentTypes';

import { fetchComments } from 'redux/api';

function* getCommentsHandler() {
  try {
    const comments = yield call(fetchComments);
    yield put({ type: commentFetchTypes.FETCH_SUCCESS, payload: comments });
  } catch (error) {
    yield put({ type: commentFetchTypes.FETCH_FAILURE, error });
  }
}

function* watchCommentHanlder() {
  yield takeEvery(commentFetchTypes.FETCH, getCommentsHandler);
}

export default watchCommentHanlder;
