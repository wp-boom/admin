import axios from 'axios'
import Store from '../store/store'
import actionCreator from '../store/actionCreator'
import store from '../store/store';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  let action = actionCreator.changeTokenModal(true)
  store.dispatch(action)
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios