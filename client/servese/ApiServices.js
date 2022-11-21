import axios from 'axios';

import JwtServise from './JwtServise';

const Apiservices = axios.create({
  baseURL: 'https://commercekm.onrender.com/',
  withCredentials: true,
});

Apiservices.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${JwtServise.getToken()}`
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);
// instance.interceptors.response.use(
//   (response) => {},
//   (error) => {}
// );

export default Apiservices;
