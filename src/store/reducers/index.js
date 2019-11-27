import { combineReducers } from 'redux';
import products from './products/reducer';
import shoppingCart from './shoppingCart/reducer';

export default combineReducers({ products, shoppingCart });
