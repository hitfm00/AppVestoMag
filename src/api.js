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
};
