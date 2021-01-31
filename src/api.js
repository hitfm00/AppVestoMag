import * as axios from 'axios';

/* Create axios instance with common options */
const instance = axios.create({
  baseURL: 'http://167.172.186.154/',
});

/* API endpoints */
export const API = {
  getProducts() {
    return instance.get('/api/products/');
  },
  purchase(datas) {
    console.log(datas);
    return instance.post(
      '/api/purchase',
      {
        datas,
      },
      { withCredentials: false }
    );
  },
  tokenRequest(values) {
    return instance.post(
      '/token/request',
      {
        username: values.username,
        password: values.password,
      },
      { withCredentials: false }
    );
  },
};
