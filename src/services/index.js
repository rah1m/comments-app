import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:8080/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default Axios;
