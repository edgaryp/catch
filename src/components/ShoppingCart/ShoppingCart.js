import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Divider
} from '@material-ui/core';
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';
import StyledShoppingCart from './styles/StyledShoppingCart';
import Button from '../Button';
import { numberToCurrency } from '../../utils';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = ({ shoppingCart, remove, increment, decrement }) => {
  return (
    <StyledShoppingCart>
      <CardHeader
        avatar={
          <Avatar>
            <ShoppingCartIcon />
          </Avatar>
        }
        title="My shopping cart"
      ></CardHeader>
      <CardContent>
        {shoppingCart.items.length ? (
          <>
            {shoppingCart.items.map((item, index) => {
              return (
                <div key={index}>
                  <ShoppingCartItem
                    item={item}
                    remove={remove}
                    increment={increment}
                    decrement={decrement}
                  />
                  <Divider />
                </div>
              );
            })}
            <Box textAlign="right" width="100%">
              <Typography variant="h5">
                Total: {numberToCurrency(shoppingCart.totalPrice)}
              </Typography>
            </Box>
            <Box textAlign="center" width="100%" marginTop={3}>
              <Button size="large" colour="green">
                Check out
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}
      </CardContent>
    </StyledShoppingCart>
  );
};

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.object,
  remove: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default ShoppingCart;
