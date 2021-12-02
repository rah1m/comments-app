import { combineReducers } from 'redux';

import commentPostReducer from './commentPost';
import commentFetchReducer from './commentFetch';

const rootReducer = combineReducers({
  comments: commentFetchReducer,
  commentPostState: commentPostReducer,
});

export default rootReducer;
