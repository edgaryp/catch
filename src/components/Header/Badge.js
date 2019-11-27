import React from 'react';
import { connect } from 'react-redux';
import { Badge as MuiBadge } from '@material-ui/core';
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';

const Badge = ({ shoppingCartCount }) => (
  <MuiBadge badgeContent={shoppingCartCount}>
    <ShoppingCartIcon />
  </MuiBadge>
);

const mapStateToProps = state => ({
  shoppingCartCount: state.shoppingCart.items.length
});

export default connect(mapStateToProps)(Badge);
