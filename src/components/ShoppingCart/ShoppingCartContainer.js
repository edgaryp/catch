import React from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import {
  remove,
  increment,
  decrement
} from '../../store/reducers/shoppingCart/actions';

const ShoppingCartContainer = props => <ShoppingCart {...props} />;

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});
const mapDispatchToProps = dispatch => ({
  remove: product => dispatch(remove(product)),
  increment: product => dispatch(increment(product)),
  decrement: product => dispatch(decrement(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
