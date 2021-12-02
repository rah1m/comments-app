import Axios from 'services';

const fetchComments = async () => {
  const response = await Axios.get('comments');
  return response.data;
};

const postComment = async (body) => {
  const response = await Axios.post('comments', body);
  return response.data;
};

export { fetchComments, postComment };
