import { ADD_TO_CART, REMOVE, INCREMENT, DECREMENT } from './types';

export const addToCart = product => ({
  type: ADD_TO_CART,
  product
});
export const remove = product => ({
  type: REMOVE,
  product
});
export const increment = product => ({
  type: INCREMENT,
  product
});
export const decrement = product => ({
  type: DECREMENT,
  product
});
