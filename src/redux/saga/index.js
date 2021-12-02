import { all } from 'redux-saga/effects';

import watchCommentHanlderSaga from './commentFetch';
import watchAddCommentHanlderSaga from './commentPost';

function* rootSaga() {
  yield all([watchCommentHanlderSaga(), watchAddCommentHanlderSaga()]);
}

export default rootSaga;
