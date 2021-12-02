import { commentFetchTypes } from 'types/commentTypes';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export default function commentFetchReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case commentFetchTypes.FETCH:
      return { ...state, isLoading: true };

    case commentFetchTypes.FETCH_SUCCESS:
      return { ...state, comments: payload, isLoading: false, error: null };

    case commentFetchTypes.FETCH_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
}
