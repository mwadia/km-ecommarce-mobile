import axios from 'axios';

import JwtServise from './JwtServise';

const Apiservices = axios.create({
  baseURL: 'https://commercekm.onrender.com/',
  withCredentials: true,
});

Apiservices.interceptors.request.use(
 async (config) => {
    let token=await JwtServise.getToken()
   config.headers['Authorization'] = `Bearer ${token}`
    
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
