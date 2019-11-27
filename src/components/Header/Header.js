import React, { useState } from 'react';
import { Box, Container, IconButton } from '@material-ui/core';
import StyledHeader from './styles/StyledHeader';
import logo from '../../assets/logo.svg';
import Snow from './Snow';
import ShoppingCart from '../ShoppingCart';
import Badge from './Badge';

const Header = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  return (
    <StyledHeader className="header">
      <Snow />
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <img src={logo} alt="Logo" className="header-logo" />
          <Box position="relative">
            <IconButton
              className="header-shopping-cart-icon"
              onClick={() => setShowShoppingCart(!showShoppingCart)}
            >
              {/* Badge component relies on the store so make it a component so Header compoenent doesn't rerender everytime shopping cart chagnes. */}
              <Badge />
            </IconButton>
            {showShoppingCart && <ShoppingCart />}
          </Box>
        </Box>
      </Container>
    </StyledHeader>
  );
};

export default Header;
