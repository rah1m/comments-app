import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { commentFetchTypes } from 'types/commentTypes';
import CommentItem from './CommentItem';

const Comments = () => {
  const { isloading, comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: commentFetchTypes.FETCH });
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  const list = comments?.map(({ author, createdDate, text }, index) => {
    return <CommentItem {...{ author, createdDate, text }} key={index} />;
  });

  return <ul className='list-comment'>{list}</ul>;
};

export default Comments;
