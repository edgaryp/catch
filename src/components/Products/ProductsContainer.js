import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/reducers/shoppingCart/actions';
import { Box } from '@material-ui/core';
import ProductCard from './ProductCard';
import { Products } from '../../utils';

const ProductsContainer = ({ products, addToCart }) => {
  const allProducts = products.getProducts();
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {allProducts &&
        allProducts.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
    </Box>
  );
};

const mapStateToProps = state => ({
  products: new Products(state.products.results)
});
const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
