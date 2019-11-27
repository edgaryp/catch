import React from 'react';
import {
  CardContent,
  CardMedia,
  Typography,
  Box,
  Fab
} from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import StyledProductCard from './styles/StyledProducts';

const ProductCard = ({ product, addToCart }) => {
  const {
    id,
    name,
    $salePrice,
    $retailPrice,
    imageUrl,
    quantityAvailable
  } = product;
  const isProductSoldOut = quantityAvailable <= 0;
  return (
    <StyledProductCard key={id} isProductSoldOut={isProductSoldOut}>
      <CardMedia image={imageUrl} title={name}></CardMedia>
      {isProductSoldOut && (
        <Box className="sold-out-badge">
          <Typography variant="h5">SOLD OUT</Typography>
        </Box>
      )}
      <CardContent>
        {!isProductSoldOut && (
          <Fab onClick={() => addToCart(product)}>
            <AddShoppingCartIcon />
          </Fab>
        )}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          justifyContent="space-between"
        >
          <Typography className="product-name">{name}</Typography>
          <Box>
            <Typography>{$retailPrice}</Typography>
            <Typography variant="h5">{$salePrice}</Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func
};

export default ProductCard;
