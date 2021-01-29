import { ADD_PRODUCT } from './types';

const initialState = {
  products: [],
};
export function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.add] };
    default:
      return state;
  }
}
