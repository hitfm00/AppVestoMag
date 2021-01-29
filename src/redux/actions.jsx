import { ADD_PRODUCT } from './types';

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    add: product,
  };
}
