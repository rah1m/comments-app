import { commentPostTypes } from 'types/commentTypes';

const initialState = {
  comments: [],
  isLoading: false,
};

export default function commentPostReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case commentPostTypes.POST:
      return { ...state, isLoading: true };

    case commentPostTypes.POST_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, payload],
        isLoading: false,
      };

    case commentPostTypes.POST_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
}
