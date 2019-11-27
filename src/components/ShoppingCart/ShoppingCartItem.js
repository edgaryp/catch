import React from 'react';
import PropTypes from 'prop-types';
import { Box, CardMedia, Typography, IconButton } from '@material-ui/core';
import { AddCircle, RemoveCircle, Delete } from '@material-ui/icons';
import { numberToCurrency } from '../../utils';

const ShoppingCartItem = ({ item, remove, increment, decrement }) => {
  const { id, name, salePrice, quantity, imageUrl, quantityAvailable } = item;
  return (
    <Box key={id}>
      <Box display="flex" flexDirection="column">
        <Box display="flex">
          <CardMedia image={imageUrl} title={name}></CardMedia>
          <Box width="100%">
            <Typography variant="h6">
              {numberToCurrency(salePrice * quantity)}
            </Typography>
            <Typography>Qty: {quantity}</Typography>
            <Typography variant="body2" className="name">
              {name}
            </Typography>
            <Box textAlign="right">
              <IconButton
                onClick={() => increment(item)}
                disabled={quantity >= quantityAvailable}
              >
                <AddCircle />
              </IconButton>
              <IconButton
                onClick={() => decrement(item)}
                disabled={quantity <= 1}
              >
                <RemoveCircle />
              </IconButton>
              <IconButton onClick={() => remove(item)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ShoppingCartItem.propTypes = {
  item: PropTypes.object,
  remove: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default ShoppingCartItem;
